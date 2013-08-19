function new_system() {
    var system = {
	edges: [{id:1,from:'stdin',to:'device_1'}],
	add_node_between: function(node) {
	    var edge = this.edges[0];
	    var new_edge = {id:2, from:node.id, to:edge.to};
	    edge.to = node.id;
	    this.edges[1] = new_edge;
	}
    };  
    return system;
}