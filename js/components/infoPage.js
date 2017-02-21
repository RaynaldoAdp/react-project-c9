var React = require ('react');

var WheelAnimation = function(){
		return(
		    <div className="wheelAnimation">
                <span className="scroll-btn">
                		<span className="mouse">
                			<span>
                			</span>
                		</span>
                </span>
                <p>Scroll Mouse</p>
			</div>
		)
}	

var InfoPage = function(props){
		return(
			<div className="infoPage">
				<h1>{props.text}</h1>
				<p>{props.text1}</p>
				<p>{props.text2}</p>
				<p>{props.text3}</p>
				<WheelAnimation />
				<div className ={props.arrow}> </div>
				<p>{props.acknowledgement}</p>
				<img src={props.image} />
			</div>
		)
}		

module.exports = InfoPage;