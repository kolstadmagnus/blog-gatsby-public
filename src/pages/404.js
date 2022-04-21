import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"

const NotFoundPage = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Ikke funnet (404)" />
      <article className="post">
        <h1>Ikke funnet (404)</h1>
        <p>Beklager det.</p>
      </article>
      <br />
      <br />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`