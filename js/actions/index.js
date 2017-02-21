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

var RENDER_MENU4 = 'RENDER_MENU4'
var renderMenu4 = function(){
	return{
		type: RENDER_MENU4
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

var GET_QUERY_TRACKS_SUCCESS = 'GET_QUERY_TRACKS_SUCCESS';
var getQueryTracksSuccess = function(queryTrack) {
    return {
        type: GET_QUERY_TRACKS_SUCCESS,
        queryTrack : queryTrack
    };
};

var GET_QUERY_TRACKS_ERROR= 'GET_QUERY_TRACKS_ERROR';
var getQueryTracksError = function() {
    return {
        type: GET_QUERY_TRACKS_ERROR
    };
};


var getFeaturedTracks = function() {
    return function(dispatch) {
        var url = 'https://api.jamendo.com/v3.0/tracks/?client_id=56d30c95&format=jsonpretty&limit=3&include=musicinfo&groupby=artist_id&featured=true';
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
                featuredTrack[i] = [];
                featuredTrack[i].push(data.results[i].album_image);
                featuredTrack[i].push(data.results[i].audio);
                featuredTrack[i].push(data.results[i].name);
                featuredTrack[i].push(data.results[i].artist_name);
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
        var url = 'https://api.jamendo.com/v3.0/tracks/?client_id=56d30c95&format=jsonpretty&limit=3&include=musicinfo&groupby=artist_id&order=popularity_month';
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
                popularTrack[i] = [];
                popularTrack[i].push(data.results[i].album_image);
                popularTrack[i].push(data.results[i].audio);
                popularTrack[i].push(data.results[i].name);
                popularTrack[i].push(data.results[i].artist_name);
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
        var url = 'https://api.jamendo.com/v3.0/tracks/?client_id=56d30c95&format=jsonpretty&limit=3&include=musicinfo&groupby=artist_id&order=downloads_month';
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
                mostDownloadTrack[i] = [];
                mostDownloadTrack[i].push(data.results[i].album_image);
                mostDownloadTrack[i].push(data.results[i].audio);
                mostDownloadTrack[i].push(data.results[i].name);
                mostDownloadTrack[i].push(data.results[i].artist_name);
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

var getQueryTracks = function(option) {
    var query ="";
    if(option === "newest"){
        query = "releasedate";
    }
    else if(option === "popular-week"){
        query = "popularity_week";
    }
    else if(option === "popular-month"){
        query = "popularity_month";
    }
    else if(option === "popular-year"){
        query = "popularity_total";
    } 
    else if(option === "download-week"){
        query = "downloads_week";
    }
    else if(option === "download-month"){
        query = "downloads_month";
    }
    else if(option === "download-year"){
        query = "downloads_total";
    }      
    
    
    return function(dispatch) {
        var url = 'https://api.jamendo.com/v3.0/tracks/?client_id=56d30c95&format=jsonpretty&limit=3&include=musicinfo&groupby=artist_id&order=' + query;
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
            var queryTrack = [];
            for(var i=0; i<3; i++){
                queryTrack[i] = [];
                queryTrack[i].push(data.results[i].album_image);
                queryTrack[i].push(data.results[i].audio);
                queryTrack[i].push(data.results[i].name);
                queryTrack[i].push(data.results[i].artist_name);
            }
            return dispatch(
                getQueryTracksSuccess(queryTrack)
            );
        })
/*        .then(function(){
            return dispatch(renderMenu1())
        })*/
        .catch(function(error) {
            return dispatch(
                getQueryTracksError()
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
exports.RENDER_MENU4 = RENDER_MENU4;
exports.renderMenu4 = renderMenu4;

exports.getPopularTracks = getPopularTracks;
exports.getFeaturedTracks = getFeaturedTracks;
exports.getMostDownloadTracks = getMostDownloadTracks;
exports.getQueryTracks = getQueryTracks;

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

exports.GET_QUERY_TRACKS_SUCCESS = GET_QUERY_TRACKS_SUCCESS;
exports.getQueryTracksSuccess = getQueryTracksSuccess;
exports.GET_QUERY_TRACKS_ERROR = GET_QUERY_TRACKS_ERROR;
exports.getQueryTracksError = getQueryTracksError;

