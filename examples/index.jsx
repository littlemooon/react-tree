/* @jsx React.DOM */

var React = require('react');

require('./style.css');

var ListExample = require('./1_List/ListExample'),
    TreeExample = require('./2_Tree/TreeExample'),
    CollapsableTreeExample = require('./3_CollapsableTree/CollapsableTreeExample'),
    MessageTreeExample = require('./4_MessageTree/MessageTreeExample');

var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1>List</h1>
        <ListExample/>

        <h1>Tree</h1>
        <TreeExample/>

        <h1>Collapsable Tree</h1>
        <CollapsableTreeExample/>

        <h1>Message Tree</h1>
        <MessageTreeExample/>
      </div>
    );
  }
});

React.render(<Examples/>, document.body);