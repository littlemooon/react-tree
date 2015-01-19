/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var SimpleTreeExample = React.createClass({
  render: function() {
    // render the tree using mock nested data and the simple component
    return (
      <Tree nodes={data} component={Quote} nodeClassName='node'/>
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

// mock nested data using default 'children' property
var data = [
  {
    name: 'George-Michael',
    quote: 'You think hes going to announce it on the boat?',
    children: [
      {
        name: 'Michael',
        quote: 'Abolutely. Its his retirement party. Plus, hes been dropping a lot of hints'
      },
      {
        name: 'George-Michael',
        quote: 'What kind of hints?',
        children: [
          {
            name: 'Michael',
            quote: 'Well, hes been calling me "pod ner"'
          }
        ]
      },
      {
        name: 'Michael',
        quote: 'And I dont think its just because hes going through his "cowboy" phase'
      }
    ]
  },
  {
    name: 'Tobias',
    quote: 'Michael! How are you?',
    children: [
      {
        name: 'Michael',
        quote: 'Im good, Tobias. Hows the job search coming along?',
        children: [
          {
            name: 'Tobias',
            quote: 'Well, Im hoping the universe will provide a path for me'
          }
        ]
      },
      {
        name: 'Michael',
        quote: 'Well, who knows, maybe youll be inspired by the boat party and start a career as a pirate'
      }
    ]
  }
];

module.exports = SimpleTreeExample;