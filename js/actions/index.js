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


var GET_FEATURED_TRACKS_SUCCESS = 'GET_FEATURED_TRACKS_SUCCESS';
var getFeaturedTracksSuccess = function(featuredTrack) {
    return {
        type: GET_FEATURED_TRACKS_SUCCESS,
        featuredTrack : featuredTrack
    };
};

var GET_FEATURED_TRACKS_ERROR= 'GET_FEATURED_TRACKS_ERROR';
var getFeaturedTracksError = function() {
    return {
        type: GET_FEATURED_TRACKS_ERROR
    };
};

var GET_POPULAR_TRACKS_SUCCESS = 'GET_POPULAR_TRACKS_SUCCESS';
var getPopularTracksSuccess = function(popularTrack) {
    return {
        type: GET_POPULAR_TRACKS_SUCCESS,
        popularTrack : popularTrack
    };
};

var GET_POPULAR_TRACKS_ERROR= 'GET_POPULAR_TRACKS_ERROR';
var getPopularTracksError = function() {
    return {
        type: GET_POPULAR_TRACKS_ERROR
    };
};

var GET_MOST_DOWNLOAD_TRACKS_SUCCESS = 'GET_MOST_DOWNLOAD_TRACKS_SUCCESS';
var getMostDownloadTracksSuccess = function(mostDownloadTrack) {
    return {
        type: GET_MOST_DOWNLOAD_TRACKS_SUCCESS,
        mostDownloadTrack : mostDownloadTrack
    };
};

var GET_MOST_DOWNLOAD_TRACKS_ERROR= 'GET_MOST_DOWNLOAD_TRACKS_ERROR';
var getMostDownloadTracksError = function() {
    return {
        type: GET_MOST_DOWNLOAD_TRACKS_ERROR
    };
};


var getFeaturedTracks = function() {
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
                getFeaturedTracksSuccess(featuredTrack)
            );
        })
/*        .then(function(){
            return dispatch(renderMenu1())
        })*/
        .catch(function(error) {
            return dispatch(
                getFeaturedTracksError()
            );
        });
    }
};

var getPopularTracks = function() {
    return function(dispatch) {
        var url = 'https://api.jamendo.com/v3.0/tracks/?client_id=56d30c95&format=jsonpretty&limit=5&include=musicinfo&groupby=artist_id&order=popularity_month';
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
            var popularTrack = [];
            for(var i=0; i<3; i++){
                popularTrack.push(data.results[i].album_image);
                popularTrack.push(data.results[i].audio);                
            }
            return dispatch(
                getPopularTracksSuccess(popularTrack)
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

var getMostDownloadTracks = function() {
    return function(dispatch) {
        var url = 'https://api.jamendo.com/v3.0/tracks/?client_id=56d30c95&format=jsonpretty&limit=5&include=musicinfo&groupby=artist_id&order=downloads_month';
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
            var mostDownloadTrack = [];
            for(var i=0; i<3; i++){
                mostDownloadTrack.push(data.results[i].album_image);
                mostDownloadTrack.push(data.results[i].audio);                
            }
            return dispatch(
                getMostDownloadTracksSuccess(mostDownloadTrack)
            );
        })
/*        .then(function(){
            return dispatch(renderMenu1())
        })*/
        .catch(function(error) {
            return dispatch(
                getMostDownloadTracksError()
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
exports.getFeaturedTracks = getFeaturedTracks;
exports.getMostDownloadTracks = getMostDownloadTracks;

exports.GET_FEATURED_TRACKS_SUCCESS = GET_FEATURED_TRACKS_SUCCESS;
exports.getFeaturedTracksSuccess = getFeaturedTracksSuccess;
exports.GET_FEATURED_TRACKS_ERROR = GET_FEATURED_TRACKS_ERROR;
exports.getFeaturedTracksError = getFeaturedTracksError;

exports.GET_POPULAR_TRACKS_SUCCESS = GET_POPULAR_TRACKS_SUCCESS;
exports.getPopularTracksSuccess = getPopularTracksSuccess;
exports.GET_POPULAR_TRACKS_ERROR = GET_POPULAR_TRACKS_ERROR;
exports.getPopularTracksError = getPopularTracksError;

exports.GET_MOST_DOWNLOAD_TRACKS_SUCCESS = GET_MOST_DOWNLOAD_TRACKS_SUCCESS;
exports.getMostDownloadTracksSuccess = getMostDownloadTracksSuccess;
exports.GET_MOST_DOWNLOAD_TRACKS_ERROR = GET_MOST_DOWNLOAD_TRACKS_ERROR;
exports.getMostDownloadTracksError = getMostDownloadTracksError;
