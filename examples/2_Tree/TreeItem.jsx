/* @jsx React.DOM */

var React = require('react');

/*
 * Component to render for each node
 */
var TreeItem = React.createClass({
  displayName: 'TreeItem',
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

module.exports = TreeItem;