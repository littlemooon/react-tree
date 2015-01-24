/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var SimpleCollapsableTreeItem = require('./SimpleCollapsableTreeItem');

/*
 * Collapsable nested tree of data
 */
var SimpleCollapsableTreeExample = React.createClass({
  getInitialState: function() {
    return { data: initialData };
  },

  render: function() {
    // render the tree using mock nested data and the simple component
    return (
      <Tree 
        nodes = {this.state.data} 
        component = {SimpleCollapsableTreeItem} 
        nodeClassName = 'node'/>
    );
  }
});


/*
 * Mock nested data using default 'children' child property
 */
var initialData = [
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

module.exports = SimpleCollapsableTreeExample;