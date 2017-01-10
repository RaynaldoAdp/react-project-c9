var React = require('react');

var TrackDisplay = function(props){
    var trackSource = props.track;
    var backgroundImage = props.image;
    var songName = props.name;
    var artist  = props.artist
    var background = {backgroundImage: 'url('+ backgroundImage};
	return(
		 <div className="col-4 tracks">  
  		        <div className="cover" style={background}>
  			        <audio controls className= "audio">
	    			    <source src={trackSource} type="audio/mpeg" />
	  			    </audio>
  		        </div>
			    <p>Track Name: {songName}</p>
  			    <p>Artist: {artist}</p>
	     </div>
	);
}

module.exports = TrackDisplay;