var actions = require('../actions/index');

var initialGameState = [{bottom:0, right:0}]; //its important that this has something inside else array[0] in components will produce an error
var bottomCount = 0;
var rightCount = 0;

var theReducer = function(state, action){
	state = state || initialGameState;
	if(action.type === actions.RENDER_RIGHT) {
		rightCount++;
		var newState = Object.assign({}, {bottom:0, right: rightCount} );
		return [newState];
	}
	else if(action.type === actions.RENDER_BOTTOM) {
		bottomCount++;
		var newState = Object.assign({}, {bottom: bottomCount, right:0} );
		return [newState];
	}
	return state;
};

exports.theReducer = theReducer;