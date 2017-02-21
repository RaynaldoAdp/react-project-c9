var React = require ('react');

var InfoPage = function(){
	return(
		<div className="infoPage">
			<h1>Get your daily dose of music here!</h1>
			<h1>Pick from one menu and get different tracks:</h1>
			<p>Featured tracks handpicked by the Jamendo team</p>
			<p>The most popular tracks voted by the public</p>
			<p>The Most downloaded tracks</p>
			<p>Still not satisfied? you can select from the different options given for you</p>
			<img className ="logo" src='http://www.userlogos.org/files/logos/43932_aleksandr009/jamendo_3.png?1451132005'/>
		</div>
	)
}		

module.exports = InfoPage;