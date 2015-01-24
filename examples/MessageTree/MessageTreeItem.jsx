/* @jsx React.DOM */

var React = require('react');

var MessageTreeItemNew = require('./MessageTreeItemNew');

/*
 * Component to render for each node
 */
var MessageTreeItem = React.createClass({
  propTypes: {
    // data for each node passed in by the tree
    data: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      time: React.PropTypes.string.isRequired,
      message: React.PropTypes.string.isRequired,
      replies: React.PropTypes.array
    }).isRequired
  },
  
  getInitialState: function() {    
    return {replying: false};
  },

  _handleReply: function() {
    this.setState({replying: true});
  },
  _handleSubmit: function() {
    this.props.submit(this.props.data.id, this.refs.newMessage.refs.text.getDOMNode().value);
    this.setState({replying: false});
  },
  _handleCancel: function() {
    this.setState({replying: false});
  },

  render: function() {
    var d = this.props.data;
    var reply = null;

    if(this.state.replying) {
      reply = (
        <div>
          <MessageTreeItemNew ref='newMessage'/>
          <button className='button' onClick={this._handleSubmit}>Submit</button>
          <button className='button' onClick={this._handleCancel}>Cancel</button>
        </div>
      );
    } else if(this.props.data) {
      reply = <button className='button' onClick={this._handleReply}>Reply</button>;
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

module.exports = MessageTreeItem;