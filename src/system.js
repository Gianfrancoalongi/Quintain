function new_system() {
    var system = {
	edges: new_edge_set(),
	add_node_between: function(id) {
	    var edge = this.edges.get_edge(0);
	    var oldto = edge.to;
	    edge.to = id;
	    this.edges.add_new_edge(id, oldto);
	}
    };  
    system.edges.add_new_edge('stdin', 'device_1');
    return system;
}
