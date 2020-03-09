module.exports = {
	siteMetadata: {
		title: `Synectiks | Cloud Solutions`,
		description: ` Synectiks | Cloud Solutions`,
		author: `Synectiks`,
		siteUrl: `http://localhost:8000`
	},
	pathPrefix: '/next',
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-remark-responsive-iframe`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-breadcrumb`,
			options: {
				// optional: To create a default crumb
				// see Click Tracking default crumb example below
				defaultCrumb: {
					location: {
						pathname: '/'
					},
					crumbLabel: 'Home',
					crumbSeparator: ' / ',
					crumbStyle: { color: '#666' },
					crumbActiveStyle: { color: 'orange' }
				},
				// optional: switch to className styling
				// see `useClassNames example with Click Tracking` below
				useClassNames: true
				// optional: if you are using path prefix
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'http://localhost:8000',
				sitemap: 'http://localhost:8000/sitemap.xml',
				policy: [ { userAgent: '*', allow: '/' } ]
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'synectiks-latest-website',
				protocol: 'https',
				hostname: 'synectiks.com'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		},

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Synectiks`,
				short_name: `synectiks`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/favicon/android-icon-36x36.png`
				// This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-routes`,
			options: {
				// this is the path to your routes configuration file
				path: `${__dirname}/src/routes.js`
			}
		},
		`gatsby-plugin-meta-redirect`
	]
};
