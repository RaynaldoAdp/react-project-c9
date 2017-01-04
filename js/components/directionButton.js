var React = require('react');

var DirectionButton = function(props){
	return(
		<button onClick={props.onClick} className={props.direction}>{props.description}</button> 
	);
}

module.exports = DirectionButton;

