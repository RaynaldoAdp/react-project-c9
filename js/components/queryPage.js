var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');

//For the Make your own choice page
var QueryPage =  React.createClass({
	submit: function(event){
		event.preventDefault();
		this.props.dispatch(actions.getQueryTracks(this.selectInput.value));//this.selectInput.value is the option value
	},
	render: function(){
		return(
		    <div className="queryPage">
                <form id="trackOption">
					<select className="dropdown" name="trackOption" form="trackOption" ref= {function(element) {
                    	this.selectInput = element;
                		}.bind(this)}>
					  <option value="newest">Newest Tracks</option>
					  <option value="popular-week">This weeks most popular</option>
					  <option value="popular-month">This months most popular</option>
					  <option value="popular-year">This years most popular</option>
					  <option value="download-week">This weeks most downloads</option>
					  <option value="download-month">This months most downloads</option>
					  <option value="download-year">This years most downloads</option>					  
					</select>
					<button onClick = {this.submit}>Find</button>
				</form>
			</div>
		)
	}
})		

var Container = connect()(QueryPage);

module.exports = Container;