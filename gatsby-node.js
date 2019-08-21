/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions
    const result = await graphql(`
  {
    allWordpressPage {
      edges {
        node {
          title
          excerpt
          content
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          content
          slug
        }
      }
    }
  }
`)
  let {allWordpressPost, allWordpressPage} = result.data;
  allWordpressPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })
  allWordpressPage.edges.forEach(({node}) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })
}
