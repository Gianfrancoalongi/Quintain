function new_edge_set() {
    var edge_set = {set:[],
		    size:function() { return this.set.length;},
		    add_new_edge:function(id_a, id_b) {
			var edge = {id:this.size(),
				    from:id_a,
				    to:id_b};
			this.set.push(edge);
		    },
		    get_edge:function(index) {
			return this.set[index];
		    }
		   };
    return edge_set;
};
