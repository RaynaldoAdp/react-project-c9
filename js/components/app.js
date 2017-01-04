var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var classNames = require('classnames');

// the different components
var Form = require('./form');
var DirectionButton = require('./directionButton');
var Webpage = require('./webpage');

//cosmetic purposes
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;

//the main component App
var App = React.createClass({
	componentDidMount: function(){

	},
	scrollToLeft: function(){
		scroller.scrollTo('myScrollToElement', {
	  		duration: 1500,
	  		delay: 100,
	  		smooth: true,
		})
	},
	renderRight : function(){
		this.props.dispatch(actions.renderRight());
	},
	renderBottom : function(){
		this.props.dispatch(actions.renderBottom());
	},
	render: function(){

		//to cater for the different css as the state changes. mainly to achieve horizontal alignment
        var mainContainerClass = classNames({
      		'mainContainer': this.props.state[0].right === 0,
      		'mainContainerRight': this.props.state[0].right !== 0
   		});

        //to remove or append elements in react according to certain conditions
   		var rightButton = !this.props.state[0].right ? <DirectionButton direction = 'right' description = 'right' onClick={this.renderRight}  />: <empty />;
   		var bottomButton = !this.props.state[0].bottom ? <DirectionButton direction = 'bottom' description = 'bottom' onClick={this.renderBottom}  />: <empty />;

   		//to check the state and get the condition of the pages. to check all 3 conditions without order (unlike else if)
   		var pageArray = [];
		if(this.props.state[0].right){
			pageArray.push('right');
		}
		if(this.props.state[0].bottom){
			pageArray.push('bottom');
		}

   		var pages = pageArray.map(function(page, index){
   			return <Webpage direction = {page} key = {index} />;
   		});

		return(
			<div className={mainContainerClass}>
				{pages}
				<div className ="mainPage">
					{rightButton}
					{bottomButton}
					<div className='formContainer col-4'>
					</div>
				</div>
			</div>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {
        state: state
    };
};
var Container = connect(mapStateToProps)(App);

module.exports = Container;