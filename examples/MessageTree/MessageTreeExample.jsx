/* @jsx React.DOM */

var React = require('react');

var MessageTree = require('./MessageTree');

var MessageTreeExample = React.createClass({

  onSubmit: function(id, text) {
    var newMessage = {
      id: '123',
      name: 'Bob',
      time: '04/05/11 13:45',
      message: text
    };
    updateData(data, id, newMessage);
  },

  render: function() {
    return <MessageTree nodes={data} submit={this.onSubmit}/>;
  }
});

var data = [
  {
    id: '1',
    name: 'Alice',
    time: '04/05/11 13:04',
    message: 'Oh, hey guys!',
    replies: [
      {
        id: '1.1',
        name: 'Bob',
        time: '04/05/11 13:15',
        message: 'Who is this?',
        replies: [
          {
            id: '1.1.1',
            name: 'Calvin',
            time: '04/05/11 13:28',
            message: 'Dude, it says... Alice',
            replies: []
          },
          {
            id: '1.1.2',
            name: 'Alice',
            time: '04/05/11 13:37',
            message: 'I am Spartacus.',
            replies: []
          }
        ]
      },
      {
        id: '1.2',
        name: 'Calvin',
        time: '04/05/11 13:21',
        message: 'Aw yeaaahh. In the mix.',
        replies: []
      }
    ]
  }
];

var updateData = function(data, id, message) {
  for (var key in data) {
    if(data[key].id === id) {
      data[key].replies.push(message);
    } else {
      return updateData(id, data[key].replies);
    }
  }
}

module.exports = MessageTreeExample;