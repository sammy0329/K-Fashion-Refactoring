const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/image', {
			target: 'http://111.118.22.25:5717', 
			changeOrigin: true,
		})
	);
};