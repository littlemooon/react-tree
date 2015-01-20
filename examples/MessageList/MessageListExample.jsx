/* @jsx React.DOM */

var React = require('react');

var MessageList = require('./MessageList');

var MessageListExample = React.createClass({

  onSubmit: function(text) {
    data.push({
      name: 'Michael',
      time: '04/05/11 13:37',
      message: text
    });
  },

  render: function() {
    return <MessageList items={data} onSubmit={this.onSubmit}/>;
  }
});

var data = [
  {
    name: 'Michael',
    time: '04/05/11 13:04',
    message: 'Lindsay, how was your flight?'
  },
  {
    name: 'Lindsay',
    time: '04/05/11 13:05',
    message: 'Great. We just got in...'
  },
  {
    name: 'Lucille',
    time: '04/05/11 13:05',
    message: 'He knows'
  }
];

module.exports = MessageListExample;