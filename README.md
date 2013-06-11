# RequireJS Setup
Some ideas as to how a JavaScript setup with requirejs could work.

## Structure
Basically three folders: ```libs```. ```modules``` and ```views```.

### Libs
Here all third party code is stored. Also, we should add a ```versions``` file, to keep track of which version we have for each library/framework/addon. If one of those dependecies has mutiple files (or extensions, like jQuery), those should be put together in a folder.

### Modules
All code not directly tied to one specific view should be put in here. That could be something like a ```RedactorHelper``` or ```Stream```.

### Views
Only code that is specifically tied to one specific view. These are the only ones that should be included from templates via ```{{ javascript("require('view/some_view')") }}```. If functionallity from something in the ```modules``` folder is needed, it should be called via RequireJS. If setup is needed, for example to bind events, in most event this should be doable via the module constructor.

## How a module should look
Even though RequireJS gives a few different ways to define modules, this seems to be the most flexible and is easy to read and understand. Also, apart from some edge-case, this notation is compatible with CommonJS.

```javascript
/*
 * Some description of the module and it's purpose
 */
 
define(function(require, exports, module) {
	// dependencies
	var dependency1 = require('dependency1'),
		dependency2 = require('dependency2');
		
	// do some setup
	foo = 'bar';
		
	// the actuall module (could of course also be an object)
	return function() {
		// some really awesome code
	};
}) 
```

*Note: This does not work on the PlayStation 3 and old versions of Opera mobile.*

## Optimization
While the r.js tool that comes with requirejs actually allows to uglify everything into one file, but it could actually make more sense to keep them seperate since one file would propbably mean a longer time till the application is ready, while downloads in the background may take more time overall, but are less noticable to the user.