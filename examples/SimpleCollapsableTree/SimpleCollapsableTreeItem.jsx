/* @jsx React.DOM */

var React = require('react');

/*
 * Component to render for each node
 */
var SimpleCollapsableTreeItem = React.createClass({
  displayName: 'SimpleCollapsableTreeItem',
  propTypes: {
    // data for each node passed in by the tree
    data: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      quote: React.PropTypes.string
    }).isRequired,
    // true if this node collapsable
    collapsable: React.PropTypes.bool,
    // true if this node is collapsed
    collapsed: React.PropTypes.bool,
    // toggle collapse state
    onCollapse: React.PropTypes.func
  },

  render: function() {
    var p = this.props;
    var d = p.data;
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

    if(p.collapsed) {
      node = (
        <div>
          <h3>{d.name} {collapse}</h3>
          
        </div>
      );
    } else {
      node = (
        <div>
          <h3>{d.name} {collapse}</h3>
          
          <p>{d.quote}</p>
        </div>
      );
    }

    return node;
  }
});

module.exports = SimpleCollapsableTreeItem;