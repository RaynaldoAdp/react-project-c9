var RENDER_LEFT = 'RENDER_LEFT'
var renderLeft = function(){
	return{
		type: RENDER_LEFT
	}
}

var RENDER_RIGHT = 'RENDER_RIGHT'
var renderRight = function(){
	return{
		type: RENDER_RIGHT
	}
}

var RENDER_BOTTOM = 'RENDER_BOTTOM'
var renderBottom = function(){
	return{
		type: RENDER_BOTTOM
	}
}

exports.RENDER_LEFT = RENDER_LEFT;
exports.renderLeft = renderLeft;
exports.RENDER_RIGHT = RENDER_RIGHT;
exports.renderRight = renderRight;
exports.RENDER_BOTTOM = RENDER_BOTTOM;
exports.renderBottom = renderBottom;