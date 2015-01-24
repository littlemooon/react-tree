/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var MessageTreeItem = require('./MessageTreeItem');

/*
 * Nested tree of messages
 */
var MessageTree = React.createClass({
  propTypes: {
    // nested data structure
    nodes: React.PropTypes.array.isRequired,
    // handle submit of a new message
    submit: React.PropTypes.func.isRequired
  },

  render: function() {
    // props to be passed to each child component
    var listProps = {
      submit: this.props.submit
    };

    return (
      <Tree 
        nodes = {this.props.nodes} 
        component = {MessageTreeItem} 
        componentProps = {listProps} 
        childPropertyName = 'replies' 
        nodeClassName = 'node'/>
    );
  }
});

module.exports = MessageTree;