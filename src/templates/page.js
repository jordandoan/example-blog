import React from "react"
import Layout from "../components/layout"
import styles from "../components/styles/content.module.less"
import { graphql } from "gatsby"
import SEO from "../components/seo";
export default ({ data }) => {
  const post = data.allWordpressPage.edges[0].node
  return (
    <Layout>
      <SEO title={post.title}/>
      <div className={styles.test}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`