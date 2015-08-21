var toDoList = function () {
    var list = [];
    this.addToDo = function (description) {
        var newToDo = new toDo(description);
        list.push(newToDo);
        this.updateLocalTodos();
        return newToDo;
    };
    this.getToDos = function () {
        return list;
    };
    this.count = function () {
        return list.length;
    };

    this.updateLocalTodos = function () {
        var todos = {
        	description: "",
     	}
    };	

    this.getLocalTodos = function () {
       return localStorage.todos; 
    };

    this.destroyAllTodos = function () {
        delete localStorage.todos;
    };
};
