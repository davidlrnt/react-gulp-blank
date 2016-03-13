"use strict";

var React = require('react');
var ReactDom = require('react-dom');
// var Router = require('react-router');

// var routes = require('./routes');

// var App = require('./components/app');

var App = React.createClass({
  render: function(){
    return (
      <h1>React Gulp Blank</h1>
    )
  }
})  

ReactDom.render( <App />, document.getElementById('app') );
