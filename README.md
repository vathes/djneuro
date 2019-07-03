## How to build with news posts
If you've written a new News post or made changes in head/layout/footer/post-template that you want applied to the preexisting news posts -- 

Don't forget to run `node prebuild.js` to build the appropriate news posts in to the `/post` folder inside `pages`

Put the markdown news post files inside the `markdowns` folder. The filename before `.md` will also be the path to the post on the website.
If you have an image reference in the post, put the image inside the `static/posts` folder.
(Due to migration from another blog framework), so far, each post images are placed inside the folder with the same name as the markdown filename (minus the .md) - we will keep this convention going to keep consistent organization.

## How to build in general
`npm run build` `npm run export` then `http-server -p 8080` to test the static export

### Note on deploy 
Remember to turn off the no-follow robot meta tag in the `components/Head.js` file for production build.

