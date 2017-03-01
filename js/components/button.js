var React = require('react');

//all the buttons in the app
var Button = function(props){
	return(
		<button className="navigationButton" onClick={props.onClick}>{props.description}</button> 
	);
}

module.exports = Button;

