var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     )
//   }
// });

// Refactor stateless functional component

var About = (props) => {
  return (
  <div>
    <h3>About</h3>
    <p>This is a weather app</p>
  </div>

  )
}

module.exports = About;
