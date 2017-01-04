var React = require ('react');

var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;

var Webpage = function(props){
	if(props.direction === 'left'){
		return <Element name="left" className = "webPage col-12 left"></Element>;
	}
	else if(props.direction === 'right'){
		return <Element name="right" className = "webPage col-12 right"></Element>;
	}
	else if(props.direction === 'bottom'){
		return <Element name="bottom" className = "webPage col-12 bottom"></Element>;
	}
	else{
		return <empty />;
	}	
}

module.exports = Webpage;