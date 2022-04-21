import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"

const PostTemplate = ({ data, location }) => {
  let post = data.mdx

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.lead}
        date={post.frontmatter.computerDate}
      />
      <article className="post">
        <header className="post" id="intro">
          <p className="date">
            <time dateTime={post.frontmatter.computerDate}>{post.frontmatter.humanDate}</time>
          </p>
          <h1 itemprop="headline">{post.frontmatter.title}</h1>
          <p className="lead">{post.frontmatter.lead}</p>
        </header>
        <section className="post" id="body-text">
          <MDXRenderer data={data}>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        computerDate: date(formatString: "YYYY-MM-DD")
        humanDate: date(formatString: "D. MMMM YYYY", locale: "nb")
        hook
        type
        lead
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`