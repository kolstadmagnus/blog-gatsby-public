import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import PhotoGrid from "../../innhold/foto/PhotoGrid"

const FotoIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Foto" />
      <PhotoGrid />
    </Layout>
  )
}

export default FotoIndex

export const pageQuery = graphql`
  query fotoIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        frontmatter: { type: { eq: "foto" } }
      },  ,  
      sort: { fields: [frontmatter___date], order: DESC },
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
      }
    }
  }
`