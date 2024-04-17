import { promises } from 'fs';
import { extract } from '@extractus/feed-extractor';
import moment from 'moment';
import YAML from 'yaml';

const { writeFile } = promises;

const postsSection = {
  section: {
    name: 'Posts',
    id: 'posts',
    template: 'sections/publications.html',
    enable: true,
    weight: 4,
    showOnNavbar: true,
  },
};

const blogRssUrl = 'https://blog.gearoid.eu/feed';

function posts() {
  return Promise.all([blogPosts()]).then(([bp]) => [...bp]);
}

function toPlainString(s) {
  return s
    .replace(/[\s+]/g, ' ')
    .replace(/<\/?[a-zA-Z-]+>/g, '')
    .replace(/(’|&#8217;)/g, "'")
    .trim();
}

function blogPosts() {
  return loadBlogPosts().then(extractRelevantDataFromRss);
}

function loadBlogPosts() {
  return extract(blogRssUrl, { descriptionMaxLen: 500 });
}

function extractRelevantDataFromRss(rssFeed) {
  return rssFeed.entries.map((e) => {
    return {
      title: toPlainString(e.title),
      publishedIn: {
        name: 'Medium',
        date: moment(e.published),
        url: rssFeed.link,
      },
      paper: {
        summary: toPlainString(e.description),
        url: e.link,
      },
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
