var React = require ('react');

var InfoPage = function(props){
		return(
			<div className="infoPage">
				<h1>{props.text}</h1>
				<div className ={props.arrow}> </div>
				<p>{props.acknowledgement}</p>
				<img src={props.image} />
			</div>
		)
}		

module.exports = InfoPage;