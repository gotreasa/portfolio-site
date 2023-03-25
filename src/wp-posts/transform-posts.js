const moment = require('moment');
const YAML = require('yaml');
const {
  promises: { readFile, writeFile },
} = require('fs');

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

const postFiles = [
  'src/wp-posts/baeldung-posts.json',
  'src/wp-posts/baeldung-cs-posts.json',
];

function loadAllPosts() {
  return Promise.all(postFiles.map(loadPosts)).then((posts) => posts.flat());
}

function loadPosts(file) {
  return readFile(file).then(JSON.parse);
}

function extractRelevantData(posts) {
  return posts.map(extractRelevantDataFromPost);
}

function extractRelevantDataFromPost(post) {
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

loadAllPosts()
  .then(extractRelevantData)
  .then(sortByDate)
  .then(formatPostDates)
  .then(write)
  .catch(console.error);
