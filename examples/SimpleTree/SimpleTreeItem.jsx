/* @jsx React.DOM */

var React = require('react');

// simple component to render for each node
var SimpleTreeItem = React.createClass({
  propTypes: {
    // data for each node passed in by the tree
    data: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      quote: React.PropTypes.string
    }).isRequired,
  },

  render: function() {
    var d = this.props.data;
    return (
      <div>
        <h3>{d.name}</h3>
        <p>{d.quote}</p>
      </div>
    );
  }
});

module.exports = SimpleTreeItem;