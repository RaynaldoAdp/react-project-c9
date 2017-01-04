var React = require ('react');

var Form = React.createClass({
	formSubmit: function(){
		var input = this.refs.input.value;
		//dispatch action
	},
	render: function(){
		return(
			<form className="inputForm" >
	     			<h3>Fill in and get info about the best places!</h3>
	      			<label form="city"> City </label>
	      			<input type="city" name='city' id='city' required />
	      			<label form="placeName"> Name of place </label>
	      			<input type="text" name='placeName' id='placeName' required />
	      			<label form="dunno"> dunno </label>
	      			<input type="text" name='dunno' id='dunno' required />
					<button type='submit'> Get Info! </button>
			</form>
		);
	}
})

module.exports = Form;