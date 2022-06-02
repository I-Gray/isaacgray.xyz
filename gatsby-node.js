exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === 'build-html' || stage === 'develop-html') {
	  actions.setWebpackConfig({
		module: {
		  rules: [
			{
			  test: /scrollreveal/,
			  use: loaders.null(),
			}
		  ],
		},
	  });
	}
  };

  exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
	  name: '@babel/plugin-transform-react-jsx',
	  options: {
		runtime: 'automatic',
	  },
	});
  };
  
  