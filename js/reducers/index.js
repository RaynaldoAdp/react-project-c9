var actions = require('../actions/index');

var initialGameState = [{menu1 : false, menu2 : false, menu3 : false, menu4 : false, postMenu4 : false, cover:[]}]; //its important that this has something inside else array[0] in components will produce an error
var theReducer = function(state, action){
	state = state || initialGameState;
	if(action.type === actions.RENDER_MENU1) {
		var newState = Object.assign({}, {menu1:true, menu2: false, menu3: false, menu4 : false, postMenu4 : false, cover:state[0].cover} );
		return [newState];
	}
	else if(action.type === actions.RENDER_MENU2) {
		var newState = Object.assign({}, {menu1:false, menu2: true, menu3: false, menu4 : false, postMenu4 : false, cover:state[0].cover} );
		return [newState];
	}
	else if(action.type === actions.RENDER_MENU3){
		var newState = Object.assign({}, {menu1:false, menu2: false, menu3: true, menu4 : false, postMenu4 : false, cover:state[0].cover} );
		return [newState];
	}
	else if(action.type === actions.RENDER_MENU4){
		var newState = Object.assign({}, {menu1:false, menu2: false, menu3: false, menu4 : true, postMenu4 : false, cover:state[0].cover} );
		return [newState];
	}
	
	else if(action.type === actions.GET_FEATURED_TRACKS_SUCCESS){
		var featuredTrack = action.featuredTrack;
		var cover = [];
		for(var i = 0; i < featuredTrack.length; i++){
			cover.push({image:featuredTrack[i][0], track:featuredTrack[i][1], name:featuredTrack[i][2], artist:featuredTrack[i][3]})
		}
		var newState = Object.assign({}, {menu1:true, menu2: false, menu3: false, menu4 : false, postMenu4 : false,
										  cover: cover});
		return [newState];
	}
	else if(action.type === actions.GET_FEATURED_TRACKS_ERROR){
		console.log('error');
	}
	
	else if(action.type === actions.GET_POPULAR_TRACKS_SUCCESS){
		var popularTrack = action.popularTrack;
		var cover = [];
		for(var i = 0; i < popularTrack.length; i++){
			cover.push({image:popularTrack[i][0], track:popularTrack[i][1], name:popularTrack[i][2], artist:popularTrack[i][3]})
		}
		var newState = Object.assign({}, {menu1:false, menu2: true, menu3: false, menu4 : false, postMenu4 : false,
										  cover: cover});
		return [newState];
	}
	else if(action.type === actions.GET_POPULAR_TRACKS_ERROR){
		console.log('error');
	}
	
	else if(action.type === actions.GET_MOST_DOWNLOAD_TRACKS_SUCCESS){
		var mostDownloadTrack = action.mostDownloadTrack;
		var cover = [];
		for(var i = 0; i < mostDownloadTrack.length; i++){
			cover.push({image:mostDownloadTrack[i][0], track:mostDownloadTrack[i][1], name:mostDownloadTrack[i][2], artist:mostDownloadTrack[i][3]})
		}
		var newState = Object.assign({}, {menu1:false, menu2: false, menu3: true, menu4 : false, postMenu4 : false,
										  cover: cover});
		return [newState];
	}
	else if(action.type === actions.GET_MOST_DOWNLOAD_TRACKS_ERROR){
		console.log('error');
	}
	
	else if(action.type === actions.GET_QUERY_TRACKS_SUCCESS){
		var queryTrack = action.queryTrack;
		var cover = [];
		for(var i = 0; i < queryTrack.length; i++){
			cover.push({image:queryTrack[i][0], track:queryTrack[i][1], name:queryTrack[i][2], artist:queryTrack[i][3]})
		}
		console.log(cover);
		var newState = Object.assign({}, {menu1:false, menu2: false, menu3: false, menu4 : false, postMenu4 : true,
										  cover: cover});
		return [newState];
	}
	else if(action.type === actions.GET_QUERY_TRACKS_ERROR){
		console.log('error');
	}
	
	return state;
};

exports.theReducer = theReducer;