/* @jsx React.DOM */

var React = require('react');

var Tree = require('../../src/Tree');

var CollapsableTreeItem = require('./CollapsableTreeItem');

/*
 * Collapsable nested tree of data
 */
var CollapsableTreeExample = React.createClass({
  getInitialState: function() {
    return { data: initialData };
  },

  render: function() {
    // render the tree using mock nested data and the simple component
    return (
      <Tree 
        nodes = {this.state.data} 
        component = {CollapsableTreeItem} 
        nodeClassName = 'node'/>
    );
  }
});


/*
 * Mock nested data using default 'children' child property
 */
var initialData = [
  {
    name: 'George-Michael',
    quote: 'But its a hell of a lot better than living like my Aunt and Uncles whose eyes have never stung from the sweet sweat of a hard days work',
    children: [
      {
        name: 'Michael',
        quote: 'Whoa, whoa... Whered you get that?',
        children: [
          {
            name: 'George-Michael',
            quote: 'From you. You say it every couple of years when they come out to visit'
          }
        ]
      },
      {
        name: 'Michael',
        quote: 'Well, maybe youre right - mayne they have been spoiled. But youll find you have more dignity when you learn the simple rule that...',
        children: [
          {
            name: 'Michael',
            quote: '... these closets are enormous!'
          }
        ]
      }
    ]
  }
];

module.exports = CollapsableTreeExample;