/* @jsx React.DOM */

var React = require('react');

var MessageTreeItemNew = require('./MessageTreeItemNew');

/*
 * Component to render for each node
 */
var MessageTreeItem = React.createClass({
  displayName: 'MessageTreeItemNew',
  propTypes: {
    // data for each node passed in by the tree
    data: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      time: React.PropTypes.string.isRequired,
      message: React.PropTypes.string.isRequired,
      replies: React.PropTypes.array
    }).isRequired,
    // true if this node collapsable
    collapsable: React.PropTypes.bool,
    // true if this node is collapsed
    collapsed: React.PropTypes.bool,
    // toggle collapse state
    onCollapse: React.PropTypes.func
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
    var p = this.props;
    var d = p.data;
    var reply = null;
    var node = null;
    var collapse = null;

    // if we are collapsable create a button
    if(p.collapsable) {
      collapse = (
        <button 
          className = 'collapse'
          onClick = {p.onCollapse}>
          {p.collapsed? '+' : '-'}
        </button>
      );
    }

    if(this.state.replying) {
      reply = (
        <div>
          <MessageTreeItemNew ref='newMessage'/>
          <button className='button' onClick={this._handleSubmit}>Submit</button>
          <button className='button' onClick={this._handleCancel}>Cancel</button>
        </div>
      );
    } else {
      reply = <button className='button' onClick={this._handleReply}>Reply</button>;
    }

    if(p.collapsed) {
      node = (
      <div>
        <h3>{d.name} {collapse}</h3>
        <p>{d.time}</p>
      </div>
    );
    } else {
      node = (
      <div>
        <h3>{d.name} {collapse}</h3>
        <p>{d.time}</p>
        <p>{d.message}</p>
        {reply}
      </div>
    );
    }

    return node;
  }
});

module.exports = MessageTreeItem;