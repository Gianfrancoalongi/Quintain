test("new system has only input to stdout edge", function() {
    var system = new_system();
    deepEqual( system.edges, [['stdin','dev_1'],['dev_1','write','stdout']]);
});
