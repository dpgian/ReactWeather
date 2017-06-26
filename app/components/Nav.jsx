var React = require('react');
var {Link} = require('react-router');
/*
var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav</h2>
        <Link to='/' activeClassName='active'>Get Weather</Link>
        <Link to='/about' activeClassName='active'>About</Link>
        <Link to='/examples' activeClassName='active'>Examples</Link>
      </div>
    );
  }
});
*/

var Nav = (props) => {
  return (
    <div>
      <h2>Nav</h2>
      <Link to='/' activeClassName='active'>Get Weather</Link>
      <Link to='/about' activeClassName='active'>About</Link>
      <Link to='/examples' activeClassName='active'>Examples</Link>
    </div>
  );
}

module.exports = Nav;
