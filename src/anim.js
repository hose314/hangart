var $ = require('jquery');
var d3 = require('d3');

var anim = {
	_start: function(timeOut) {
		d3.selectAll('rect')
			.style('opacity', 0.3)
			.transition()
			.duration(timeOut)
			.ease('elastic')
			.attr('width', function() { return Math.floor(Math.random() * window.innerWidth / 3 + 100)})
			.attr('height', function() { return Math.floor(Math.random() * 30 + 10)})
			.attr('x', 100)
			.attr('y', window.innerHeight - 100)
			.style('transform-origin', function() {
				var m = Math.random()* 30 + 20;
				var l = Math.random()* 30 + 20;
				return m.toString() + '%' + l.toString() + '%';
			})
			.style('transform', function() {
				var m = Math.random()* 360;
				return 'rotate(' + m.toString() + 'deg)';
			})


	}
}

module.exports = anim;