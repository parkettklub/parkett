module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    //  'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})