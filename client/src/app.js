var React = require('react');
var ReactDOM = require('react-dom');

var NetflixContainer = require('./containers/NetflixContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <NetflixContainer />,
    document.getElementById('app')
  );
};
