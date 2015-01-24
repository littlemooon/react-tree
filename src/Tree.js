var React = require('react');

/*
 * Tree of components for nested data structures
 * Creates a new node component for each element in the data array
 */
var Tree = React.createClass({
  displayName: 'Tree',
  propTypes: {
    // array of nested data
    nodes: React.PropTypes.array.isRequired,
    // component to render at each node
    component: React.PropTypes.func.isRequired,
    // props to pass to each node component
    componentProps: React.PropTypes.object,
    // property name for child nodes (default 'children')
    childPropertyName: React.PropTypes.string,
    // css class added to each node
    nodeClassName: React.PropTypes.string
  },

  render: function() {
    var p = this.props;
    return (
      React.DOM.div({className: p.treeClassName}, 
        // loop through the lowest level of nodes
        p.nodes.map(function(node, i) {

          // create a node for each
          return (
            React.createElement(TreeNode, {
              key: i,
              node: node, 
              component: p.component, 
              componentProps: p.componentProps, 
              childPropertyName: p.childPropertyName, 
              nodeClassName: p.nodeClassName}
            )
          );
        }.bind(this))
      )
    );
  }
});


/*
 * Node for nested data structure
 * Creates a new tree of nodes if not collapsed
 */
var TreeNode = React.createClass({
  displayName: 'TreeNode',
  propTypes: {
    // data to display
    node: React.PropTypes.object.isRequired,
    // component to render at each node
    component: React.PropTypes.func.isRequired,
    // props to pass to each node component
    componentProps: React.PropTypes.object,
    // property name for child nodes (default 'children')
    childPropertyName: React.PropTypes.string,
    // css class added to each node
    nodeClassName: React.PropTypes.string
  },

  getInitialState: function() {
    return {collapsed: false};
  },
  getDefaultProps: function() {
    return {childPropertyName: 'children'};
  },

  _handleCollapse: function() {
    this.setState({collapsed: !this.state.collapsed});
  },

  render: function() {
    var p = this.props;
    var props = {data: p.node, collapsable: false};
    var tree = null;
    
    // get the child nodes
    var children = p.node[p.childPropertyName];

    // if we are not collapsed create a new tree of children
    if(children && children.length>0 && !this.state.collapsed) {
      tree = (
        React.createElement(Tree, {
          nodes: children, 
          component: p.component, 
          componentProps: p.componentProps, 
          childPropertyName: p.childPropertyName, 
          nodeClassName: p.nodeClassName}
        )
      );
    }

    // add collapsable props if we have children
    if(children && children.length>0) {
      props.collapsable = true,
      props.collapsed = this.state.collapsed,
      props.onCollapse = this._handleCollapse
    }

    // merge with the props passed in for the component
    for (var key in p.componentProps) { props[key] = p.componentProps[key]; }

    return (
      React.DOM.div({className: p.nodeClassName},
        // create the passed in component using merged props
        React.createElement(p.component, props), 

        // add the tree of child nodes
        tree
      )
    );
  }
});

module.exports = Tree;