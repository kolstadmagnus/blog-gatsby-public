import * as React from "react"
import { graphql } from "gatsby"
import SeoIndex from "../components/SeoIndex"
import Header from "../components/Header"
import { Helmet } from "react-helmet"

export default function IndexPage() {
  return (
    <div className="index">
      <SeoIndex title="Magnus Kolstad" />
      <Helmet
        bodyAttributes={{
          id: "index"
        }}
      />
      <Header />
    </div>
  )
}

export const pageQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          computerDate: date(formatString: "YYYY-MM-DD")
          humanDate: date(formatString: "D. MMMM YYYY", locale: "nb")
          title
          lead
          type
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`