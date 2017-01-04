var React = require('react');

var DirectionButton = function(props){
	return(
		<button onClick={props.onClick}>{props.description}</button> 
	);
}

module.exports = DirectionButton;

