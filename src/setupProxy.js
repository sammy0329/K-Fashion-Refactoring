const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/image', {
			target: '', 
			changeOrigin: true,
		})
	);
};