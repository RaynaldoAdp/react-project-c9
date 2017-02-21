var React = require('react');

var DirectionButton = function(props){
	return(
		/*<button className="button" onClick={props.onClick}>{props.description}</button>*/
		<div className="svg">
			<a className="button" onClick={props.onClick}>
				<svg>
					<rect height="40" width="130" fill="transparent" />
				</svg>
				<span>lalala</span>
			</a>
		</div>
	);
}

module.exports = DirectionButton;

