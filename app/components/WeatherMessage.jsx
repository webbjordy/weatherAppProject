var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
      <div>
        <p>It's {temp} in {location}!</p>
      </div>
  );
}

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//     return(
//       <div>
//         <p>It's {temp} in {location}!</p>
//       </div>
//     )
//   }
// });

module.exports = WeatherMessage;
