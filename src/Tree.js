var React = require('react');

var Tree = React.createClass({
  propTypes: {
    // array of nested data
    nodes: React.PropTypes.array.isRequired,
    // component to render at each node
    component: React.PropTypes.func.isRequired,
    // props to pass to each node component
    componentProps: React.PropTypes.object,
    // property name for child nodes (default 'children')
    childPropertyName: React.PropTypes.string,
    // css class added to the whole tree
    treeClassName: React.PropTypes.string,
    // css class added to each node
    nodeClassName: React.PropTypes.string
  },

  render: function() {
    var p = this.props;
    return (
      React.DOM.div({className: p.treeClassName}, 
        // loop through the lowest level of nodes
        p.nodes.map(function(node, i) {
          
          // get the child nodes
          var children = node[p.childPropertyName] || node.children;
          // merge the node data with the props passed in for the component
          var props = {data: node};
          for (var key in p.componentProps) { props[key] = p.componentProps[key]; }
          
          return (
            React.DOM.div({key: i, className: p.nodeClassName}, 
              // create the passed in component using merged props
              React.createElement(p.component, props), 
              // if we have children, create a new tree of children
              children ? React.createElement(Tree, {nodes: children, component: p.component, componentProps: p.componentProps, childPropertyName: p.childPropertyName, nodeClassName: p.nodeClassName}) : null
            )
          );
        }.bind(this))
      )
    );
  }
});

module.exports = Tree;