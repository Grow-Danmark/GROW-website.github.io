// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  metaInfo: {
    siteName: 'GROW', // Change to project name
    title: 'GROW',
    siteUrl: 'www.grow.dk', // Change to siteUrl
    siteDescription: 'En forening af unge for unge', // Change to fit project description
  },
  plugins: [
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://wp.grow.dk/graphql', // Insert graphql endpoint after installing plugin for wordpress
        fieldName: 'wp',
        typeName: 'wpTypes',
      },
    },
  ],
  siteUrl: 'https://grow-danmark.github.io',
  pathPrefix: '/GROW-website.github.io',
};
