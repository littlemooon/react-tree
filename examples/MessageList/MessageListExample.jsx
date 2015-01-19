/* @jsx React.DOM */

var React = require('react');

var MessageList = require('./MessageList');

var MessageListExample = React.createClass({

  onSubmit: function(text) {
    data.push({
      name: 'Bob',
      time: '04/05/11 13:45',
      message: text
    });
  },

  render: function() {
    return <MessageList items={data} onSubmit={this.onSubmit} username='Bob'/>;
  }
});

var data = [
  {
    name: 'Alice',
    time: '04/05/11 13:04',
    message: 'Oh, hey!'
  },
  {
    name: 'Bob',
    time: '04/05/11 13:15',
    message: 'Who is this?'
  },
  {
    name: 'Alice',
    time: '04/05/11 13:37',
    message: 'I am Spartacus.'
  }
];

module.exports = MessageListExample;