[![Update Blog Posts](https://github.com/gotreasa/portfolio-site/actions/workflows/update_blog_posts.yml/badge.svg)](https://github.com/gotreasa/portfolio-site/actions/workflows/update_blog_posts.yml)
[![CodeQL](https://github.com/gotreasa/portfolio-site/actions/workflows/codeql.yml/badge.svg)](https://github.com/gotreasa/portfolio-site/actions/workflows/codeql.yml)
[![Build](https://github.com/gotreasa/portfolio-site/actions/workflows/pipeline.yml/badge.svg)](https://github.com/gotreasa/portfolio-site/actions/workflows/pipeline.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/39b97913-22d0-4592-9ec1-0e8001ab7fbd/deploy-status)](https://app.netlify.com/sites/gearoid-o-treasaigh/deploys)

# gearoid.eu

## Resources

### Retrieving WordPress posts

1. Open the author's WP page where their posts are listed
2. Open a terminal
3. Run the following command to get the post ids:
   `Array.from(document.querySelectorAll('article')).map(a => a.getAttribute('id')).map(id => id.replace('post-', '')).join(',')`
4. Open a new tab with the following endpoint:
   `https://<wp-site-url>/wp-json/wp/v2/posts?per_page=50&include=<post-ids>`
