var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
      return {
        isLoading: false
      }
    },
    handleSearch: function(location) {
      var that = this;

      this.setState({isloading: true});

      OpenWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function (errorMessage) {
        alert(errorMessage);
      });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return(
      <div>
        <h1>Weather component</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
