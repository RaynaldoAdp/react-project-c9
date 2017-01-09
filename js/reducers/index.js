var actions = require('../actions/index');

var initialGameState = [{menu1 : false, menu2 : false, menu3 : false, cover:[]}]; //its important that this has something inside else array[0] in components will produce an error
var theReducer = function(state, action){
	state = state || initialGameState;
	if(action.type === actions.RENDER_MENU1) {
		var newState = Object.assign({}, {menu1:true, menu2: false, menu3: false, cover:state[0].cover} );
		return [newState];
	}
	else if(action.type === actions.RENDER_MENU2) {
		var newState = Object.assign({}, {menu1:false, menu2: true, menu3: false, cover:state[0].cover} );
		return [newState];
	}
	else if(action.type === actions.RENDER_MENU3){
		var newState = Object.assign({}, {menu1:false, menu2: false, menu3: true, cover:state[0].cover} );
		return [newState];
	}
	else if(action.type === actions.GET_FEATURED_TRACKS_SUCCESS){
		var featuredTrack = action.featuredTrack;
		var backgroundImage1 = featuredTrack[0];
		var track1 = featuredTrack[1];
		var backgroundImage2 = featuredTrack[2];
		var track2 = featuredTrack[3];
		var backgroundImage3 = featuredTrack[4];
		var track3 = featuredTrack[5];
		var newState = Object.assign({}, {menu1:true, menu2: false, menu3: false,
										  cover: [{image: backgroundImage1, track: track1},
										          {image: backgroundImage2, track: track2},
										          {image: backgroundImage3, track: track3}]});
		return [newState];
	}
	else if(action.type === actions.GET_FEATURED_TRACKS_ERROR){
		console.log('error');
	}
	else if(action.type === actions.GET_POPULAR_TRACKS_SUCCESS){
		var popularTrack = action.popularTrack;
		var backgroundImage1 = popularTrack[0];
		var track1 = popularTrack[1];
		var backgroundImage2 = popularTrack[2];
		var track2 = popularTrack[3];
		var backgroundImage3 = popularTrack[4];
		var track3 = popularTrack[5];
		var newState = Object.assign({}, {menu1:false, menu2: true, menu3: false,
										  cover: [{image: backgroundImage1, track: track1},
										          {image: backgroundImage2, track: track2},
										          {image: backgroundImage3, track: track3}]});
		return [newState];
	}
	else if(action.type === actions.GET_POPULAR_TRACKS_ERROR){
		console.log('error');
	}
	else if(action.type === actions.GET_MOST_DOWNLOAD_TRACKS_SUCCESS){
		var mostDownloadTrack = action.mostDownloadTrack;
		var backgroundImage1 = mostDownloadTrack[0];
		var track1 = mostDownloadTrack[1];
		var backgroundImage2 = mostDownloadTrack[2];
		var track2 = mostDownloadTrack[3];
		var backgroundImage3 = mostDownloadTrack[4];
		var track3 = mostDownloadTrack[5];
		var newState = Object.assign({}, {menu1:false, menu2: false, menu3: true,
										  cover: [{image: backgroundImage1, track: track1},
										          {image: backgroundImage2, track: track2},
										          {image: backgroundImage3, track: track3}]});
		return [newState];
	}
	else if(action.type === actions.GET_MOST_DOWNLOAD_TRACKS_ERROR){
		console.log('error');
	}	
	return state;
};

exports.theReducer = theReducer;