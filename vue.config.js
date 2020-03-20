module.exports = {
	publicPath: '/',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "./src/styles/_variables.sass";`
			}
		}
	}
}
