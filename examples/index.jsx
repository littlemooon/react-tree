/* @jsx React.DOM */

var React = require('react');

require('./style.css');

var SimpleListExample = require('./SimpleList/SimpleListExample'),
    SimpleTreeExample = require('./SimpleTree/SimpleTreeExample'),
    SimpleCollapsableTreeExample = require('./SimpleCollapsableTree/SimpleCollapsableTreeExample'),
    MessageListExample = require('./MessageList/MessageListExample'),
    MessageTreeExample = require('./MessageTree/MessageTreeExample');

var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple List</h1>
        <SimpleListExample/>

        <h1>Simple Tree</h1>
        <SimpleTreeExample/>

        <h1>Simple Collapsable Tree</h1>
        <SimpleCollapsableTreeExample/>

        <h1>Message List</h1>
        <MessageListExample/>

        <h1>Message Tree</h1>
        <MessageTreeExample/>
      </div>
    );
  }
});

React.render(<Examples/>, document.body);