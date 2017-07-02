# Think-Think's portfolio


# Directory structure
- `pages`. This is where the pages for your site will go, things in this folder map to an html page (e.g.) `index.hbs` will output `index.html`
- `layouts`. Layouts for your pages. This folder must have a `default` layout, to override the default layout for a page place a front matter block in the top of the source file (e.g.)
```handlebars
---
layout: home
---
```
- `partials`. This are reusable bits of html to include in other files, you can include them
like this:
For a file `partials/header.hbs` do `{{> header }}`
- `styles`. This is where your sass files will be. They will be bundled into `public/styles/index.css`

- `images`. Duh!

# Commands
- `npm start`. To start the development server