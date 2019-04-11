module.exports = {
    siteMetadata: {
        title: `Rewind Conference`,
        description: `Get the best of conferences with Rewind. Every month a new curated list of JavaScript talks.`,
        author: `@paulbremer`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
        {
            resolve: `gatsby-source-graphql`,
            options: {
                url: 'https://api-euwest.graphcms.com/v1/cjs7amwck74sf01g7wl43slkx/master',
                typeName: 'GRAPHCMS',
                fieldName: 'rwconf',
                refetchInterval: 600 // refetch data every 10 minutes, no need to deploy again after cms changes
            }
        }
    ]
};
