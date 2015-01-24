/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var ListItem = require('./ListItem');

/*
 * List of data
 */
var ListExample = React.createClass({
  render: function() {
    return (
      <Tree 
        nodes = {data} 
        component = {ListItem} 
        nodeClassName = 'node'/>
    );
  }
});

/*
 * Mock array of data
 */
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
    quote: '... or candy'
  }
];

module.exports = ListExample;