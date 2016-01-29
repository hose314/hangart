var React = require('react');
var dom = require('react-dom');
require('./st/stylesheets/main.css');
require('./anim');

var Main = React.createClass({
	render: function() {
		return (
			<div className="Box">
			</div>
		);
	}

});

dom.render(
	<Main />,
	document.getElementById('app')
);


