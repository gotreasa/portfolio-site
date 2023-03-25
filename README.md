# fejer.io

## Resources

### Retrieving Wordpress posts

1. Open author's WP page where their posts are listed
2. Open a terminal
3. Run the following command to get the post ids:
   `Array.from(document.querySelectorAll('article')).map(a => a.getAttribute('id')).map(id => id.replace('post-', '')).join(',')`
4. Open a new tab with the following endpoint:
   `https://<wp-site-url>/wp-json/wp/v2/posts?per_page=50&include=<post-ids>`
