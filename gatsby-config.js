module.exports = {
  siteMetadata: {
    title: 'Isaac Gray | Portfolio',
	description: 'Isaac Gray is a software engineer from Sydney who designs and builds scalable software solutions.',
	siteUrl: 'https://grayisaac.xyz',
	image: '/og.png',
	twitterUsername: '@isaacgray_'
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
	"gatsby-plugin-smoothscroll",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
	  },
	},
	  {
		resolve: "gatsby-source-filesystem",
		options: {
		  name: "assets",
		  path: `${__dirname}/src/assets/`,
		},
	},
	{
		resolve: "gatsby-source-filesystem",
		options: {
		  name: "components",
		  path: `${__dirname}/src/components/`,
		},
	},
  ],
};
