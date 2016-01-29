require('./stl/stylesheets/main.css');
require('./stl/stylesheets/anim.css');
var a = require('./anim');

a._start(0);
var timeOut = 3000;
setInterval(function () {
	a._start(timeOut);
}, timeOut)