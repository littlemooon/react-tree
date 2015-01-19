/* @jsx React.DOM */

var React = require('react');

var SimpleListExample = require('./SimpleList/SimpleListExample');
var SimpleTreeExample = require('./SimpleTree/SimpleTreeExample');
var MessageListExample = require('./MessageList/MessageListExample');
var MessageTreeExample = require('./MessageTree/MessageTreeExample');

var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <hr/>
        <SimpleListExample/>
        <hr/>
        <SimpleTreeExample/>
        <hr/>
        <MessageListExample/>
        <hr/>
        <MessageTreeExample/>
        <hr/>
      </div>
    );
  }
});

React.render(<Examples/>, document.body);