var React = require('react');
/*
var WMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;

    return (
      <h3>It's {temp} in {location}</h3>
    );
  }
});
*/
// We can distructure the props in the braces instead of passing props
var WMessage = ({temp, location}) => {
//  var {temp, location} = props;

  return (
    <h3>It's {temp} in {location}</h3>
  );
}

module.exports = WMessage;
