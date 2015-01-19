/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var ListExample = React.createClass({
  render: function() {
    // render the tree using mock data and the simple component
    return (
      <Tree nodes={data} component={Quote}/>
    );
  }
});

// simple component to render for each node
var Quote = React.createClass({
  propTypes: {
    // data for each node passed in by the tree
    data: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      quote: React.PropTypes.string
    }).isRequired,
  },

  render: function() {
    return (
      <div>
        <h3>{this.props.data.name}</h3>
        <p>{this.props.data.quote}</p>
      </div>
    );
  }
});

// mock data
var data = [
  {
    name: 'Tony Montana',
    quote: 'Say hello to my little friend'
  },
  {
    name: 'Charles Foster Kane',
    quote: 'Rosebud'
  },
  {
    name: 'Don Corleone',
    quote: 'Im gonna make him an offer he cant refuse'
  }
];

module.exports = ListExample;