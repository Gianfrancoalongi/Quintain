function new_system() {
    var system = {
	edges: [['stdin','dev_1'],
		['dev_1','write','stdout']]
    };
    return system;
}