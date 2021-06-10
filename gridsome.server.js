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
    const numOfPages = 20;
    const teamID = 'cG9zdDo1OA==';
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
    }`;
    const teamQuery = `{
      page(id: "${teamID}") {
        title
        slug
      }
    }`;

    const queryResults = await graphql(query);
    const teamResults = await graphql(teamQuery);

    let pages = queryResults.data.pages.edges.map((edge) => edge.node);
    let team = teamResults.data.page;

    console.log(team);

    pages.forEach((page) => {
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
    }),
      createPage({
        path: `/${team.slug}`,
        component: './src/templates/GrowTeamet.vue',
        context: {
          slug: team.slug,
          title: team.title,
        },
      });
  });
};
