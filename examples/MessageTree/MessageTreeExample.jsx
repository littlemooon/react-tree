/* @jsx React.DOM */

var React = require('react');

var MessageTree = require('./MessageTree');

var MessageTreeExample = React.createClass({
  getInitialState: function() {
    return {
      data: initialData,
      nextId: 6
    };
  },

  onSubmit: function(id, text) {
    var newMessage = {
      id: this.state.nextId,
      name: 'Michael',
      time: '04/05/11 13:37',
      message: text
    };
    this.setState({
      data: addMessageToId(this.state.data, id, newMessage),
      nextId: this.state.nextId+1
    });
  },

  render: function() {
    return <MessageTree nodes={this.state.data} submit={this.onSubmit}/>;
  }
});

var initialData = [
  {
    id: 1,
    name: 'George-Michael',
    time: '04/05/11 13:04',
    message: 'You think hes going to announce it on the boat?',
    replies: [
      {
        id: 2,
        name: 'Michael',
        time: '04/05/11 13:04',
        message: 'Abolutely. Its his retirement party. Plus, hes been dropping a lot of hints'
      },
      {
        id: 3,
        name: 'George-Michael',
        time: '04/05/11 13:04',
        message: 'What kind of hints?',
        replies: [
          {
            id: 4,
            name: 'Michael',
            time: '04/05/11 13:05',
            message: 'Well, hes been calling me "podner"'
          }
        ]
      },
      {
        id: 5,
        name: 'Michael',
        time: '04/05/11 13:05',
        message: 'And I dont think its just because hes going through his "cowboy" phase'
      }
    ]
  }
];

var addMessageToId = function(data, id, message) {
  var array = [];
  var node;
  for (var key in data) {
    node = data[key];
    if(node.id === id) {
      node.replies = node.replies || [];
      node.replies.push(message);
    } else {
      node.replies = addMessageToId(node.replies, id, message);
    }
    array.push(node);
  }
  return array;
}

module.exports = MessageTreeExample;