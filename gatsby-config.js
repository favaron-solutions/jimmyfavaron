module.exports = {
  siteMetadata: {
    title: `Jimmy Favaron`,
    description: `A portfolio site for Jimmy Favaron`,
    author: `Jimmy Favaron`,
    siteUrl: `https://www.jimmyfavaron.com`, // replace with your site URL
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-jimmyfavaron`,
        short_name: `jimmyfavaron`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // ... add other plugins or configurations as needed
  ],
}
