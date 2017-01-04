var React = require('react');
import HorizontalScroll from 'react-scroll-horizontal';
 
var ScrollingHorizontally = React.createClass({
  render: function() {
    const child = { width: `300vw`, height: `100vh`};
    return (
        <HorizontalScroll>
        <div style={child}> <h1>hahaha</h1> </div>
        </HorizontalScroll>
    )
  }
})

module.exports = ScrollingHorizontally;