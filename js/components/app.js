var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var classNames = require('classnames');

// the different components
var Form = require('./form');
var Button = require('./button');
var Webpage = require('./webpage');

//cosmetic purposes
import HorizontalScroll from 'react-scroll-horizontal';

//the main component App
var App = React.createClass({
	componentDidUpdate: function(){

	},
	renderMenu1 : function(){
		this.props.dispatch(actions.renderMenu1());
	},
	renderMenu2 : function(){
		this.props.dispatch(actions.renderMenu2());
	},
	renderMenu3 : function(){
		this.props.dispatch(actions.renderMenu3());
	},
	render: function(){
        var mainContainerClass = classNames({
        	'noMenu' : !this.props.state[0].menu1 && !this.props.state[0].menu2 && !this.props.state[0].menu3,
      		'menu1': this.props.state[0].menu1,
      		'menu2': this.props.state[0].menu2,
      		'menu3': this.props.state[0].menu3
   		});

/*   		var button1 = function(){return <Button onClick = {this.renderMenu1} description = "Menu 1" />;};
   		var button2 = function(){return <Button onClick = {this.renderMenu2} description = "Menu 2" />;};
   		var button3 = function(){return <Button onClick = {this.renderMenu3} description = "Menu 3" />;};
*/
		return(
			<HorizontalScroll>
			<div className={mainContainerClass}>
				<div className ="mainPage">
					<Button onClick = {this.renderMenu1} description = "Menu 1" />
					<Button onClick = {this.renderMenu2} description = "Menu 2" />
					<Button onClick = {this.renderMenu3} description = "Menu 3" />
				</div>	
			</div>
			</HorizontalScroll>
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