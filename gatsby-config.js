module.exports = {
  siteMetadata: {
    title: "Isaac Gray",
	description: "Isaac Gray is a software & computer engineer who thrives off designing and implementing solutions to both software and hardware problems. ",
	siteUrl: "http://www.grayisaac.com",
	twitterUsername: "@shizza_1"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
