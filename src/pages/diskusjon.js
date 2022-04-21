import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"

const DiskusjonIndex = ({ data, location }) => {
  let posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <Seo title="Diskusjon" />
      <div class="diskusjon">
        <h1>Diskusjon</h1>
        <ul>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <li key={post.fields.slug} itemProp="post">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default DiskusjonIndex

export const pageQuery = graphql`
  query diskusjonIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        frontmatter: { type: { eq: "diskusjon" } }
      },  ,  
      sort: { fields: [frontmatter___date], order: DESC },
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          computerDate: date(formatString: "YYYY-MM-DD")
          humanDate: date(formatString: "D. MMMM YYYY", locale: "nb")
          title
          type
        }
      }
    }
  }
`