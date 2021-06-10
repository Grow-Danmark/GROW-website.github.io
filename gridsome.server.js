// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    let numOfPages = 20;
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    // const { data } = await graphql(`
    //   query {
    //     pages(first: ${numOfPages}) {
    //       nodes {
    //         title
    //         slug
    //         id
    //         pageId
    //       }
    //     }
    //   }
    // `);
    const query = `{
      pages(first: ${numOfPages}) {
        edges {
          node {
            title
            slug
            id
            databaseId
            content
          }
        }
      }
    }`

    const queryResults = await graphql(query)

    let pages = queryResults.data.pages.edges.map(edge => edge.node)

    pages.forEach(page => {
      createPage({
        path: `/${page.slug}`,
        component: './src/templates/WP_Page.vue',
        context: {
          id: page.id,
          slug: page.slug,
          title: page.title,
          pageId: page.databaseId,
          content: page.content,
        },
      });
    })
    // data.pages.nodes.forEach(function(node, index) {
      // createPage({
      //   path: `/${node.slug}`,
      //   component: './src/templates/WP_Page.vue',
      //   context: {
      //     id: node.id,
      //     slug: node.slug,
      //     title: node.title,
      //     pageId: node.pageId,
      //   },
      // });
    });
};
