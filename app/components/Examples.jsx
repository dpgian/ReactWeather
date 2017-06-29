var React = require('react');
var {Link} = require('react-router');
/*
var Examples = React.createClass({
  render: function () {
    return(
      <h3>Examples</h3>
    );
  }
});
*/
var Examples = (props) => {
    return(
      <div>
        <h1 className='text-center page-title'>Examples!</h1>
        <p>Here are a fer examples location to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Rome'>Rome</Link>
          </li>
          <li>
            <Link to='/?location=London'>London</Link>
          </li>
        </ol>
      </div>
    )
};

module.exports = Examples;
