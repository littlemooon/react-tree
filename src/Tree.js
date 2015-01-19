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
    var style = {paddingLeft: '10px', marginLeft: '20px', borderLeft: '1px solid'};
    return (
      React.DOM.div({className: this.props.treeClassName}, 
        // loop through the lowest level of nodes
        this.props.nodes.map(function(node, i) {
          // get the child nodes
          var children = node[this.props.childPropertyName] || node['children'];
          // merge the node data with the props passed in for the component
          var props = {data: node};
          for (var key in this.props.componentProps) { props[key] = this.props.componentProps[key]; }
          return (
            React.DOM.div({style: style, key: i, className: this.props.nodeClassName}, 
              // create the passed in component using merged props
              React.createElement(this.props.component, props), 
              // if we have children, create a new tree of children
              children ? React.createElement(Tree, {nodes: children, component: this.props.component, componentProps: this.props.componentProps, childPropertyName: this.props.childPropertyName}) : null
            )
          );
        }.bind(this))
      )
    );
  }
});

module.exports = Tree;