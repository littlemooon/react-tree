/* @jsx React.DOM */

var React = require('react');

/*
 * New message input
 */
var MessageTreeItemNew = React.createClass({
  render: function() {
    return <input ref='text'/>;
  }
});

module.exports = MessageTreeItemNew;