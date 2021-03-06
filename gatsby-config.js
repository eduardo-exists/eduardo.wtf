module.exports = {
  siteMetadata: {
    title: `Eduardo Exists`,
    description: `A centralized hub about ed.`,
    author: `@eduardo-exists`,
    url: 'https://eduardo.wtf'
  },
  plugins: [
    'gatsby-plugin-root-import',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eduardo-exists`,
        short_name: `eduardo-existis`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
