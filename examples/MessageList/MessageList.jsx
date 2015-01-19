/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var MessageList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired
  },
  
  getInitialState: function() {    
    return {replying: false};
  },

  handleReply: function() {
    this.setState({replying: true});
  },
  handleSubmit: function() {
    this.props.onSubmit(this.refs.newMessage.refs.text.getDOMNode().value);
    this.setState({replying: false});
  },
  handleCancel: function() {
    this.setState({replying: false});
  },

  render: function() {
    var reply = null;

    if(this.state.replying) {
      reply = (
        <div>
          <NewMessageItem ref='newMessage'/>
          <button className='button' onClick={this.handleSubmit}>Submit</button>
          <button className='button' onClick={this.handleCancel}>Cancel</button>
        </div>
      );
    } else {
      reply = <button className='button' onClick={this.handleReply}>Reply</button>;
    }

    return (
      <div>
        <Tree nodes={this.props.items} component={MessageItem} childPropertyName='replies' nodeClassName='node'/>
        {reply}
      </div>
    );
  }
});

var MessageItem = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      time: React.PropTypes.string.isRequired,
      message: React.PropTypes.string.isRequired
    }).isRequired
  },

  render: function() {
    var d = this.props.data;
    return (
      <div>
        <h3>{d.name}</h3>
        <p>{d.time}</p>
        <p>{d.message}</p>
      </div>
    );
  }
});

var NewMessageItem = React.createClass({
  render: function() {
    return <input ref='text'/>;
  }
});

module.exports = MessageList;