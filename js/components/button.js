var React = require('react');

var Button = function(props){
	return(
		<button className="navigationButton" onClick={props.onClick}>{props.description}</button> 
	);
}

module.exports = Button;

