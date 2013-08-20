function new_edge_set() {
    var edge_set = {set:[],
		    size:function() { return this.set.length;},
		    add_new_edge:function(node_a, node_b) {
			var edge = {id:this.size(),
				    from:node_a.id,
				    to:node_b.id};
			this.set.push(edge);
		    },
		    get_edge:function(index) {
			return this.set[index];
		    }
		   };
    return edge_set;
};