/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var MessageTreeItem = require('./MessageTreeItem');

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

module.exports = MessageTree;