/* @jsx React.DOM */

var React = require('react');

/*
 * Component to render for each node
 */
var MessageListItem = React.createClass({
  propTypes: {
    // data for each node passed in by the tree
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

module.exports = MessageListItem;