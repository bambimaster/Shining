/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `SHINing World`,
  },  
plugins:[
    {
     resolve: `gatsby-source-filesystem`,
     options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
   },
  {  resolve: `gatsby-source-drupal`,
    options: {
      baseUrl: `http://192.168.1.102/`,
      apiBase: `jsonapi`, // optional, defaults to `jsonapi`
    },
  },
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`,
  'gatsby-plugin-material-ui',
]
}
