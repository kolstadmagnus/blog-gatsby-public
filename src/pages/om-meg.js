import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import AboutMe from "../components/AboutMe"

const OmMeg = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Om meg" />
      <AboutMe />
    </Layout>
  )
}

export default OmMeg

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`