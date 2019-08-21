import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
  <Layout>
    <SEO title=""/>
    <h2>Why Won't You Work</h2>
      <h3>Posts</h3>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <Link to={node.slug}>
          <h4>{node.title}</h4>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
  </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`

export default IndexPage
