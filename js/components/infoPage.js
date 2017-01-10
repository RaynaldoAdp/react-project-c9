var React = require ('react');

var InfoPage = function(props){
		return(
			<div className="infoPage">
				<h1>{props.text}</h1>
				<p>{props.text1}</p>
				<p>{props.text2}</p>
				<p>{props.text3}</p>
				<div className ={props.arrow}> </div>
				<p>{props.acknowledgement}</p>
				<img src={props.image} />
			</div>
		)
}		

module.exports = InfoPage;