var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var classNames = require('classnames');

// the different components
var Button = require('./button');
var InfoPage = require('./infoPage');
var TrackDisplay = require('./trackDisplay');
var QueryPage = require('./queryPage');

//renders different components depending on the status of the state
var MainMenu = function(props){
	var status = props.status;
	if(!status.menu1 && !status.menu2 && !status.menu3 && !status.menu4 && !status.postMenu4){
		return <InfoPage />;
	}
	else if(status.menu1){
		return (<h1 className="pageDescription">Featured Tracks</h1>)
	}
	else if(status.menu2){
		return (<h1 className="pageDescription">Popular Tracks</h1>)
	}
	else if(status.menu3){
		return (<h1 className="pageDescription">Most Downloaded Tracks</h1>)
	}
	else if(status.menu4){
		return (<div className="queryPageContainer">
					<h1 className="queryPageDescription">Not satisfied with the choices you get so far?</h1>
					<h1 className="queryPageDescription">Find your music through this selection</h1>
					<QueryPage />
				</div>
		)
	}
	else if(status.postMenu4){
		return (<h1 className="pageDescription">As You Wish =)</h1>)
	}
}

//the main component App
var App = React.createClass({
	//renders the different page(with different ajax requests) depending on the state
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
	renderMenu4: function(){
		this.props.dispatch(actions.renderMenu4());
	},
	render: function(){
		//position the buttons differently depending on which page is rendered
		var buttonClass;
   		if(!this.props.state[0].menu1 && !this.props.state[0].menu2 && !this.props.state[0].menu3 && !this.props.state[0].menu4 && !this.props.state[0].postMenu4){
   			buttonClass = "buttonClass1";
   		}
   		else if(this.props.state[0].menu4){
   			buttonClass = "buttonClass1";
   		}
   		else{
   			buttonClass = "buttonClass2";
   		}
		
		//renders the different tracks depending on which page is rendered
		var content;
   		if(this.props.state[0].menu1 || this.props.state[0].menu2 || this.props.state[0].menu3 || this.props.state[0].postMenu4){
	   		content = this.props.state[0].cover.map(function(data, index){
	   				return <TrackDisplay image={data.image} track={data.track} key={index} name={data.name} artist={data.artist} />;
	   		})
		}
		else{
			content = function(){
				return <empty />
			}
		}

		return(
			<div>
				<div className="mainContainer">
					<MainMenu status = {this.props.state[0]} /> 
					<div className='row'>
						{content}
					</div>
				</div>
				<div className={buttonClass}>
					<Button onClick = {this.renderMenu1} description = "Featured Tracks" />
					<Button onClick = {this.renderMenu2} description = "Popular Tracks" />
					<Button onClick = {this.renderMenu3} description = "Most Download Tracks" />
					<Button onClick = {this.renderMenu4} description = "Make Your Own Choice!" />
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