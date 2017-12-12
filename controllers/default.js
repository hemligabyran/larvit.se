'use strict';

exports.run = function (req, res, cb) {
	const data = {
		'_global': '',
		'title': 'LarvIT - Welcome'
	};

	cb(null, req, res, data);
};
