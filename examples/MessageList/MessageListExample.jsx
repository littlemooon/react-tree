/* @jsx React.DOM */

var React = require('react');

var MessageList = require('./MessageList');

var MessageListExample = React.createClass({
  getInitialState: function() {
    return {
      data: initialData
    };
  },

  _onSubmit: function(text) {
    var newMessage = {
      name: 'Michael',
      time: '04/05/11 13:37',
      message: text
    };
    this.setState({
      data: addMessage(this.state.data, newMessage)
    });
  },

  render: function() {
    return <MessageList items={this.state.data} onSubmit={this._onSubmit}/>;
  }
});

var initialData = [
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

var addMessage = function(data, message) {
  data.push(message);
  return data;
}

module.exports = MessageListExample;