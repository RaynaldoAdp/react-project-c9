var actions = require('../actions/index');

var initialGameState = [{menu1 : false, menu2 : false, menu3 : false}]; //its important that this has something inside else array[0] in components will produce an error
var theReducer = function(state, action){
	state = state || initialGameState;
	if(action.type === actions.RENDER_MENU1) {
		var newState = Object.assign({}, {menu1:true, menu2: false, menu3: false} );
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
	return state;
};

exports.theReducer = theReducer;