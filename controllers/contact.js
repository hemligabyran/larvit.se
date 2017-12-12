'use strict';

exports.run = function (req, res, cb) {
	const data = {
		'_global': '',
		'title': 'LarvIT - Contact us plz!'
	};

	cb(null, req, res, data);
};
