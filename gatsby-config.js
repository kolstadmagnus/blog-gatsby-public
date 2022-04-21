module.exports = {
  siteMetadata: {
    title: `Magnus Kolstad`,
    author: {
      name: `Magnus R. Kolstad`,
      summary: `Magnus R. Kolstad, journalistikkstudent på Universitetet i Stavanger`,
      description:  "Magnus R. Kolstad, journalistikkstudent på Universitetet i Stavanger",
    },
    description:  `Magnus R. Kolstad, journalistikkstudent på Universitetet i Stavanger`,
    siteUrl: `https://kolstadmagnus.no/`,
    social: {
      mail: `kolstadmagnus@gmail.com`,
      instagram: `kolstadmagnus`,
      twitter: `KolstadMagnus`,
      youtube: `UC7QpsGiWwVc9lmnIJvA9OLA`
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: `900000000000`,
              linkImagesToOriginal: false,
              backgroundColor: `none`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.07var(--line-length)`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-autolink-headers`,
              options: {
                icon: false,
                itemprop: `heading`,
                maintainCase: false,
                removeAccents: true,
                elements: [`h2`, `h3`, `h4`],
              },
          }
        ],
      },
    },
    {
    resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `innhold`,
        path: `${__dirname}/innhold/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `journalistikk`,
        path: `${__dirname}/innhold/journalistikk/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `diskusjon`,
        path: `${__dirname}/innhold/diskusjon/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `foto`,
        path: `${__dirname}/innhold/foto/`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}