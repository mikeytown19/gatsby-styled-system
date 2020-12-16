
// const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  return graphql(`
  query MyQuery {
    allSanityPage {
      nodes {
        _rawSections
        _rawHero
        _rawSlug
      }
    }
  }

    `, { limit: 1000 }).then(result => {
      if (result.errors) {
        throw result.errors
      }

      const projects = result.data.allSanityPage.nodes || [];
      console.log(projects)
      projects.forEach((edge, index) => {

        console.log(edge)
        const path = `/${edge._rawSlug.current}`
        createPage({
          path,
          component: require.resolve('./src/templates/index.js'),
          context: {slug: edge._rawSlug.current},
          pageData: result.data
        })
      })
    })

}
