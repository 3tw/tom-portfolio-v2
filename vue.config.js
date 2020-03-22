module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/TomPortfolio_Vue/'
    : '/'
	,
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "./src/styles/_variables.sass";`
			}
		}
	}
}
