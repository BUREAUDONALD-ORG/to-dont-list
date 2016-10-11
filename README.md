# To Don't List

![](https://travis-ci.org/BUREAUDONALD-ORG/to-dont-list.svg?branch=master)

Site for the To Don't List book.

## Technical

This site is build using GatsbyJS.

For building the project [NodeJS](http://www.nodejs.org) is required.

The project dependencies themselves can then be installed with the command:

```npm install```

To run a local development server at localhost:8000

```npm run dev```

To deploy (given the right security clearance):

```npm run deploy```

Note that project is also deployed by Travis-CI on commit to the master branch.
This will only happen if the build doesn't generate errors. (This is mostly a good thing, when a breaking mistake is made the build won't be overwritten)

## Content

Most content is separated into a different files, mostly in the content directory. Editing these files will update the content in the site. The syntax in the file is either full [YAML](https://en.wikipedia.org/wiki/YAML) or MD with YML frontmatter. (Frontmatter is usually defined with three starting dashes and three closing ones)
