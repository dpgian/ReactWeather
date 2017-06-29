var React = require('react');
var WForm = require('WForm');
var WMessage = require('WMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
        isLoading: false
    }
  },
  handleSearch: function (location){
    var self = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      self.setState({
        isLoading: false
      });
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WMessage temp={temp} location={location}/>;
      }
    }

    return(
      <div>
        <h1 className='text-center'>Get Weather!</h1>
        <WForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
