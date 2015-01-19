/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var MessageTree = React.createClass({
  propTypes: {
    nodes: React.PropTypes.array.isRequired,
    submit: React.PropTypes.func.isRequired
  },

  render: function() {
    var listProps = {
      submit: this.props.submit
    };

    return (
      <div>
        <Tree nodes={this.props.nodes} component={MessageTreeItem} componentProps={listProps} childPropertyName='replies' nodeClassName='node'/>
      </div>
    );
  }
});

var MessageTreeItem = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      time: React.PropTypes.string.isRequired,
      message: React.PropTypes.string.isRequired,
      replies: React.PropTypes.array
    }).isRequired
  },
  
  getInitialState: function() {    
    return {replying: false};
  },

  handleReply: function() {
    this.setState({replying: true});
  },
  handleSubmit: function() {
    this.props.submit(this.props.data.id, this.refs.newMessage.refs.text.getDOMNode().value);
    this.setState({replying: false});
  },
  handleCancel: function() {
    this.setState({replying: false});
  },

  render: function() {
    var d = this.props.data;
    var reply = null;

    if(this.state.replying) {
      reply = (
        <div>
          <NewMessageItem ref='newMessage'/>
          <button className='button' onClick={this.handleSubmit}>Submit</button>
          <button className='button' onClick={this.handleCancel}>Cancel</button>
        </div>
      );
    } else if(this.props.data) {
      reply = <button className='button' onClick={this.handleReply}>Reply</button>;
    }

    return (
      <div>
        <h3>{d.name}</h3>
        <p>{d.time}</p>
        <p>{d.message}</p>
        {reply}
      </div>
    );
  }
});

var NewMessageItem = React.createClass({
  render: function() {
    return <input ref='text'/>;
  }
});

module.exports = MessageTree;