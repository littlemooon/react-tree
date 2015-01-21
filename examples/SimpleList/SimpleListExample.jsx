/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var SimpleListItem = require('./SimpleListItem');

var SimpleListExample = React.createClass({
  render: function() {
    // render the tree using mock data and the simple component
    return (
      <Tree nodes={data} component={SimpleListItem} nodeClassName='node'/>
    );
  }
});

// mock data
var data = [
  {
    name: 'Michael',
    quote: 'So, this is a magic trick, huh?'
  },
  {
    name: 'Gob',
    quote: '"Illusion", Michael. A "trick" is something a whore does for money'
  },
  {
    name: 'Gob',
    quote: '... or candy!'
  }
];

module.exports = SimpleListExample;