var React = require ('react');

//description on the first page
var InfoPage = function(){
	return(
		<div className="infoPage">
			<h1 className="pageDescription">Get your daily dose of music here!</h1>
			<h1 className="pageDescription">Pick from one menu and get different tracks:</h1>
			<p>Featured tracks handpicked by the Jamendo team</p>
			<p>The most popular tracks voted by the public</p>
			<p>The Most downloaded tracks by the public</p>
			<p>Still not satisfied? you can select from the different options given for you</p>
			<img className ="logo" src='http://www.userlogos.org/files/logos/43932_aleksandr009/jamendo_3.png?1451132005'/>
		</div>
	)
}		

module.exports = InfoPage;