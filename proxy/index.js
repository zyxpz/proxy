const fs = require('fs');

const cwd = process.cwd();

const server = require('./server');

const file = `${cwd}/.proxyrc.js`;

let data;

if (readFile(file)) {
	 data = require('../.proxyrc');
}

function readFile(file) {
	try {
		fs.accessSync(file, 'fs.constants.R_OK');
	} catch (error) {
		console.log(error);
		return false;
	}
  
	return true;
}

function MockWebpackPlugin() {
	this.config = data;
}

MockWebpackPlugin.prototype.apply = function (compiler) {
	server({ config: this.config });
  
	compiler.plugin('emit', (compilation, callback) => {
		callback();
	});
};

module.exports = {
	MockWebpackPlugin,
	proxy: data
};