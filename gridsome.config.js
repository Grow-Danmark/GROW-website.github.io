// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  metaInfo: {
    siteName: 'Grow', // Change to project name
    title: 'test',
    siteUrl: 'siteUrl', // Change to siteUrl
    siteDescription: 'En forening af unge for unge', // Change to fit project description
  },
  plugins: [
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'http://test.scottlind.dk/graphql', // Insert graphql endpoint after installing plugin for wordpress
        fieldName: 'wp',
        typeName: 'wpTypes',
      },
    },
  ],
};
