require('isomorphic-fetch');

var RENDER_MENU1 = 'RENDER_MENU1'
var renderMenu1 = function(){
	return{
		type: RENDER_MENU1
	}
}

var RENDER_MENU2 = 'RENDER_MENU2'
var renderMenu2 = function(){
	return{
		type: RENDER_MENU2
	}
}

var RENDER_MENU3 = 'RENDER_MENU3'
var renderMenu3 = function(){
	return{
		type: RENDER_MENU3
	}
}


var GET_POPULAR_TRACKS_SUCCESS = 'GET_POPULAR_TRACKS_SUCCESS';
var getPopularTracksSuccess = function(featuredTrack) {
    return {
        type: GET_POPULAR_TRACKS_SUCCESS,
        featuredTrack : featuredTrack
    };
};

var GET_POPULAR_TRACKS_ERROR= 'GET_POPULAR_TRACKS_ERROR';
var getPopularTracksError = function() {
    return {
        type: GET_POPULAR_TRACKS_ERROR
    };
};

var getPopularTracks = function() {
    return function(dispatch) {
        var url = 'https://api.jamendo.com/v3.0/tracks/?client_id=56d30c95&format=jsonpretty&limit=5&include=musicinfo&groupby=artist_id&featured=true';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var featuredTrack = [];
            for(var i=0; i<3; i++){
                featuredTrack.push(data.results[i].album_image);
                featuredTrack.push(data.results[i].audio);                
            }
            return dispatch(
                getPopularTracksSuccess(featuredTrack)
            );
        })
/*        .then(function(){
            return dispatch(renderMenu1())
        })*/
        .catch(function(error) {
            return dispatch(
                getPopularTracksError()
            );
        });
    }
};
  

exports.RENDER_MENU1 = RENDER_MENU1;
exports.renderMenu1 = renderMenu1;
exports.RENDER_MENU2 = RENDER_MENU2;
exports.renderMenu2 = renderMenu2;
exports.RENDER_MENU3 = RENDER_MENU3;
exports.renderMenu3 = renderMenu3;
exports.getPopularTracks = getPopularTracks;
exports.GET_POPULAR_TRACKS_SUCCESS = GET_POPULAR_TRACKS_SUCCESS;
exports.getPopularTracksSuccess = getPopularTracksSuccess;
exports.GET_POPULAR_TRACKS_ERROR = GET_POPULAR_TRACKS_ERROR;
exports.getPopularTracksError = getPopularTracksError;