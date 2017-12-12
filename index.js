'use strict';

// Given config parameters is the default, all can be omitted
//const Larvitbase = require('larvitbase')

process.chdir(__dirname);

let options	= {};

options.server = {
	'host':        '0.0.0.0',
	'port':        8001,
	'pubFilePath': './public',
	'customRoutes': [{
		'regex': '^/$', // Regexp to be matched for the given URL
		'controllerName': 'default' // Name of the file in ./controllers/<filename>.js
	}]
};

require('larvitbase')(options.server);;
