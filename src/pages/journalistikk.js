import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import Img from "gatsby-image"

const JournalistikkIndex = ({ data, location }) => {
  let posts = data.allMdx.nodes
  return (
    <Layout location={location}>
      <Seo title="Journalistikk" />
      <div class="journalistikk">
        <ol>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

            return (
              <li>
                <article>
                  <figure>
                    <Link to={post.fields.slug} itemProp="url">
                      <Img fluid={featuredImgFluid} />
                    </Link>
                  </figure>
                  <div>
                    <p className="date">
                      <time dateTime={post.frontmatter.computerDate}>{post.frontmatter.humanDate}</time>
                    </p>
                    <h2 key={post.fields.slug} itemProp="headline">
                      <Link to={post.fields.slug} itemProp="url">{title}</Link>
                    </h2>
                    <p class="hook">{post.frontmatter.hook}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default JournalistikkIndex

export const pageQuery = graphql`
  query journalistikkIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        frontmatter: { type: { eq: "journalistikk" } }
      },  
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
          hook
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