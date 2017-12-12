'use strict';

exports.run = function (req, res, cb) {
	const data = {
		'_global': '',
		'title': '404 - Oh noes!!'
	};

	cb(null, req, res, data);
};
