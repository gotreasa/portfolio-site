const {
  promises: { readFile, writeFile },
} = require('fs');

const { extract } = require('@extractus/feed-extractor');
const moment = require('moment');
const YAML = require('yaml');

const postsSection = {
  section: {
    name: 'Posts',
    id: 'posts',
    template: 'sections/publications.html',
    enable: true,
    weight: 6,
    showOnNavbar: true,
  },
  buttons: [
    { name: 'All', filter: 'all' },
    { name: 'Baeldung', filter: 'baeldung' },
    { name: 'RockIT', filter: 'rockit' },
  ],
};

const baeldungPostFiles = [
  'src/posts/baeldung-posts.json',
  'src/posts/baeldung-cs-posts.json',
];

const rockItRssUrl = 'https://rockit.zone/index.xml';

function posts() {
  return Promise.all([baeldungPosts(), rockItPosts()]).then(([bp, rp]) => [
    ...bp,
    ...rp,
  ]);
}

function baeldungPosts() {
  return loadAllBaeldungPosts().then(extractRelevantDataFromWp);
}

function loadAllBaeldungPosts() {
  return Promise.all(baeldungPostFiles.map(loadBaeldungPosts)).then((posts) =>
    posts.flat(),
  );
}

function loadBaeldungPosts(file) {
  return readFile(file).then(JSON.parse);
}

function extractRelevantDataFromWp(posts) {
  return posts.map(extractRelevantDataFromWpPost);
}

function extractRelevantDataFromWpPost(post) {
  return {
    title: toPlainString(post.title.rendered),
    publishedIn: {
      name: extractSiteName(post),
      date: moment(post.date),
      url: extractSiteBaseUrl(post),
    },
    paper: {
      summary: toPlainString(post.excerpt.rendered),
      url: post.link,
    },
    categories: ['baeldung'],
  };
}

function extractSiteName(post) {
  const url = extractSiteBaseUrl(post);
  if (url.endsWith('/cs/')) {
    return 'Baeldung CS';
  }

  return 'Baeldung';
}

function extractSiteBaseUrl(post) {
  const link = post.link;
  const lastSlash = link.lastIndexOf('/');
  return link.substring(0, lastSlash + 1);
}

function toPlainString(s) {
  return s
    .replace(/[\s+]/g, ' ')
    .replace(/<\/?[a-zA-Z-]+>/g, '')
    .replace(/(’|&#8217;)/g, "'")
    .trim();
}

function rockItPosts() {
  return loadRockItPosts().then(extractRelevantDataFromRss);
}

function loadRockItPosts() {
  return extract(rockItRssUrl, { descriptionMaxLen: 500 });
}

function extractRelevantDataFromRss(rssFeed) {
  return rssFeed.entries.map((e) => {
    return {
      title: toPlainString(e.title),
      publishedIn: {
        name: 'RockIT',
        date: moment(e.published),
        url: rssFeed.link,
      },
      paper: {
        summary: toPlainString(e.description),
        url: e.link,
      },
      categories: ['rockit'],
    };
  });
}

function sortByDate(posts) {
  return posts.sort(comparePosts).reverse();
}

function comparePosts(p1, p2) {
  if (p1.publishedIn.date === p2.publishedIn.date) {
    return 0;
  }

  if (p1.publishedIn.date > p2.publishedIn.date) {
    return 1;
  }

  return -1;
}

function formatPostDates(posts) {
  return posts.map(formatPostDate);
}

function formatPostDate(post) {
  post.publishedIn.date = post.publishedIn.date.format('D MMM YYYY');
  return post;
}

function write(posts) {
  postsSection.publications = posts;
  const postsYaml = YAML.stringify(postsSection, {
    lineWidth: 0,
    singleQuote: true,
  });
  return writeFile('data/sections/posts.yaml', postsYaml);
}

posts().then(sortByDate).then(formatPostDates).then(write).catch(console.error);
