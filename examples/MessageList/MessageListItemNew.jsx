/* @jsx React.DOM */

var React = require('react');

/*
 * New message input
 */
var MessageListItemNew = React.createClass({
  render: function() {
    return <input ref='text'/>;
  }
});

module.exports = MessageListItemNew;