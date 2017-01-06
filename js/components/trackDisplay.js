var React = require('react');

var TrackDisplay = function(props){
    var trackSource = props.track;
    var backgroundImage = props.image;
    var background = {backgroundImage: 'url('+ backgroundImage};
	return(
		 <div className="col-4 tracks">  
  		        <div className="cover" style={background}>
  			        <audio controls className= "audio">
	    			    <source src={trackSource} type="audio/mpeg" />
	  			    </audio>
  		        </div>
	     </div>
	);
}

module.exports = TrackDisplay;