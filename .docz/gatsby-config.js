const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Verge Ai Docs',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/valetolpegin/Desktop/git/documentation-site/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Verge Ai Docs',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/valetolpegin/Desktop/git/documentation-site',
          templates:
            '/Users/valetolpegin/Desktop/git/documentation-site/node_modules/docz-core/dist/templates',
          docz: '/Users/valetolpegin/Desktop/git/documentation-site/.docz',
          cache:
            '/Users/valetolpegin/Desktop/git/documentation-site/.docz/.cache',
          app: '/Users/valetolpegin/Desktop/git/documentation-site/.docz/app',
          appPackageJson:
            '/Users/valetolpegin/Desktop/git/documentation-site/package.json',
          appTsConfig:
            '/Users/valetolpegin/Desktop/git/documentation-site/tsconfig.json',
          gatsbyConfig:
            '/Users/valetolpegin/Desktop/git/documentation-site/gatsby-config.js',
          gatsbyBrowser:
            '/Users/valetolpegin/Desktop/git/documentation-site/gatsby-browser.js',
          gatsbyNode:
            '/Users/valetolpegin/Desktop/git/documentation-site/gatsby-node.js',
          gatsbySSR:
            '/Users/valetolpegin/Desktop/git/documentation-site/gatsby-ssr.js',
          importsJs:
            '/Users/valetolpegin/Desktop/git/documentation-site/.docz/app/imports.js',
          rootJs:
            '/Users/valetolpegin/Desktop/git/documentation-site/.docz/app/root.jsx',
          indexJs:
            '/Users/valetolpegin/Desktop/git/documentation-site/.docz/app/index.jsx',
          indexHtml:
            '/Users/valetolpegin/Desktop/git/documentation-site/.docz/app/index.html',
          db:
            '/Users/valetolpegin/Desktop/git/documentation-site/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
