test("new device can be created", function() {
    var dev = new_device();
    equal(dev.id, "device_1");
});

test("new stdin can be created", function() {
    var stdin = new_stdin();
    equal(stdin.id, "stdin");
});

test("new system has only input to stdout edge", function() {
    var system = new_system();
    deepEqual( system.edges, [{id:1,from:'stdin',to:'device_1'}]);
});

test("adding branch to empty system will put it between stdin and device", function() {
    var system = new_system();
    var branch = new_branch();
    system.add_node_between(branch);
    deepEqual( system.edges, [{id:1,from:'stdin',to:'branch_1'},
			      {id:2,from:'branch_1',to:'device_1'}
			     ]);
});

test("adding replicator to empty system will put it between stdin and device", function() {
    var system = new_system();
    var replicator = new_replicator();
    system.add_node_between(replicator);
    deepEqual( system.edges, [{id:1,from:'stdin',to:'replicator_1'},
			     {id:2,from:'replicator_1',to:'device_1'}
			    ]);
});

test("adding splitter to empty system will put it between stdin and device", function() {
    var system = new_system();
    var splitter = new_splitter();
    system.add_node_between(splitter);
    deepEqual( system.edges, [{id:1,from:'stdin',to:'splitter_1'},
			      {id:2,from:'splitter_1',to:'device_1'}]);
});

test("adding function to empty system will put it between stdin and device", function() {
    var system = new_system();
    var funct = new_function();
    system.add_node_between(funct);
    deepEqual( system.edges, [{id:1,from:'stdin',to:'function_1'},
			      {id:2,from:'function_1',to:'device_1'}
			     ]);
});

test("edge handler can create empty edge set", function() {
    var edges = new_edge_set();
    equal( edges.size(), 0);
});

test("add new edge to edge set, using edge handler", function() {
    var edges = new_edge_set();
    var branch = new_branch();
    var func = new_function();
    edges.add_new_edge(branch.id, func.id);
    equal( edges.size(), 1 );
});

test("it is possible to retrieve edges from edge set", function() {
    var edges = new_edge_set();
    var branch = new_branch();
    var func = new_function();
    edges.add_new_edge(branch.id, func.id);
    deepEqual( edges.get_edge(0), {id:0,from:'branch_1',to:'function_1'});
});
