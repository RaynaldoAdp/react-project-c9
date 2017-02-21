var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var classNames = require('classnames');

// the different components
var Form = require('./form');
var Button = require('./button');
var InfoPage = require('./infoPage');
var TrackDisplay = require('./trackDisplay');
var wheelAnimation = require('./wheelAnimation');

//cosmetic purposes
import HorizontalScroll from 'react-scroll-horizontal';

//template for infoPage
var mainPage1 = 'Get your daily dose of music here! Pick from one menu and get different tracks:';

var mainPage2 =	'Menu1: Featured tracks handpicked by the Jamendo team';
					
var mainPage3 = 'Menu2: Popular tracks voted by the public';
					
var mainPage4 = 'Menu3: Most downloaded tracks';

var menu1Template = 'Featured tracks handpicked by the Jamendo team';

var menu2Template = 'Popular tracks voted by the public';

var menu3Template = 'Most downloaded tracks';

var acknowledgement = 'Powered by:';

var jamendo = 'http://www.userlogos.org/files/logos/43932_aleksandr009/jamendo_3.png?1451132005';

var arrow = 'arrow bounce';

//page1 component
var Page1 = function(props){
	var status = props.status;
	if(status.menu1){
		return <InfoPage text={menu1Template} image={jamendo} arrow={arrow} acknowledgement={acknowledgement} />;
	}
	else if(status.menu2){
		return <InfoPage text={menu2Template} image={jamendo} arrow={arrow} acknowledgement={acknowledgement} />;
	}
	else if(status.menu3){
		return <InfoPage text={menu3Template} image={jamendo} arrow={arrow} acknowledgement={acknowledgement} />;
	}
	else{
		return <InfoPage text={mainPage1} text1 ={mainPage2} text2={mainPage3} text3={mainPage4} />;
	}
}

//the main component App
var App = React.createClass({
	componentDidUpdate: function(){

	},
	renderMenu1 : function(){
		this.props.dispatch(actions.getFeaturedTracks());
		this.props.dispatch(actions.renderMenu1());
	},
	renderMenu2 : function(){
		this.props.dispatch(actions.getPopularTracks());
		this.props.dispatch(actions.renderMenu2());
	},
	renderMenu3 : function(){
		this.props.dispatch(actions.getMostDownloadTracks());
		this.props.dispatch(actions.renderMenu3());
	},
	render: function(){
        var mainContainerClass = classNames({
        	'noMenu' : !this.props.state[0].menu1 && !this.props.state[0].menu2 && !this.props.state[0].menu3,
      		'menu1': this.props.state[0].menu1,
      		'menu2': this.props.state[0].menu2,
      		'menu3': this.props.state[0].menu3
   		});
   		
/*   		var page1 = function(){
   			if(this.props.state[0].menu1){
   				return <InfoPage text={menu1Template} />;
   			}
   			else if(this.props.state[0].menu2){
   				return <InfoPage text={menu2Template} />;
   			}
   			else if(this.props.state[0].menu3){
   				return <InfoPage text={menu3Template} />;
   			}
   			else{
   				return <InfoPage text={menu0Template} />;
   			}
   		}*/
   		
   		var content = this.props.state[0].cover.map(function(data, index){
   			return <TrackDisplay image={data.image} track={data.track} key={index} name={data.name} artist={data.artist} />;	
   		});

/*   		var button1 = function(){return <Button onClick = {this.renderMenu1} description = "Menu 1" />;};
   		var button2 = function(){return <Button onClick = {this.renderMenu2} description = "Menu 2" />;};
   		var button3 = function(){return <Button onClick = {this.renderMenu3} description = "Menu 3" />;};
*/
		return(
			<div>
			<HorizontalScroll>
			<div className={mainContainerClass}>
				<Page1 status={this.props.state[0]} />
				<div className='row'>
					{content}
				</div>
			</div>
			</HorizontalScroll>
			<div className="buttonContainer">
				<Button onClick = {this.renderMenu1} description = "Menu 1" />
				<Button onClick = {this.renderMenu2} description = "Menu 2" />
				<Button onClick = {this.renderMenu3} description = "Menu 3" />
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