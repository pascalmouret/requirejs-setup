// basic configuration for RequireJS
requirejs.config({
	baseUrl: 'public/js',
	paths: {
		'lib': 'libs',
		'module': 'modules',
		'view': 'views'
	}
});

// call main
require('main');