var actions = require('../actions/index');

var initialGameState = [{menu1 : false, menu2 : false, menu3 : false, cover:[]}]; //its important that this has something inside else array[0] in components will produce an error
var theReducer = function(state, action){
	state = state || initialGameState;
	if(action.type === actions.RENDER_MENU1) {
		var newState = Object.assign({}, {menu1:true, menu2: false, menu3: false, cover:state[0].cover} );
		return [newState];
	}
	else if(action.type === actions.RENDER_MENU2) {
		var newState = Object.assign({}, {menu1:false, menu2: true, menu3: false} );
		return [newState];
	}
	else if(action.type === actions.RENDER_MENU3){
		var newState = Object.assign({}, {menu1:false, menu2: false, menu3: true} );
		return [newState];
	}
	else if(action.type === actions.GET_POPULAR_TRACKS_SUCCESS){
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
	else if(action.type === actions.GET_POPULAR_TRACKS_ERROR){
		console.log('error');
	}
	return state;
};

exports.theReducer = theReducer;