import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/styles/content.module.less";
const IndexPage = ({ data }) => {
  return (
  <Layout>
    <SEO title="Home"/>
    <h2 className={styles.title}>Why Won't You Work</h2>
      <h3 className={styles.title}>Posts</h3>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <Link to={node.slug}>
          <h4 className={styles.title}>{node.title}</h4>
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
