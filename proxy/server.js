const express = require('express');

const readData = require('./readData');

function server({ config, prot = 8001 }) {
	if (config) {
		const app = express();

		app.use((req, res, next) => {
			req.config = config;
			next();
		});
    
		app.use(readData);

		const server = app.listen(mockPort, function () {
			let host = server.address().address;
			let port = server.address().port;
			console.log('Mock server listening at http://%s:%s', host, port);
		});
	} else {
		console.log('no');
	}
}

module.exports = server;