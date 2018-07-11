const excapeRegExp = require('lodash.escaperegexp');

const cwd = process.cwd();

const { join } = require('path');

const files = [
	'.proxyrc.js',
	'webpack.config.js',
	'proxy.js'
].map(file => {
	console.log(join(cwd, file));
});