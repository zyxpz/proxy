const path = require('path');

const fs = require('fs');

module.exports = async function(params) {
	const config = req.config;
  
	if (config[req.path]) {
		const data = await fsRead(file);
	}
  

	function fsRead(file) {
		return new Promise((resolve, reject) => {
			fs.readFile(file, (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(data);
			});
		});
	}
};