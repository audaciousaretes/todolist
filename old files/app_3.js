var toDoList = function () {  //creates a function called todolist
    var list = []; //creates a variable for an array called list
    this.addToDo = function (description) { //creates function to add a ToDo description
        var newToDo = new toDo(description); //creates a variable for new ToDos
        list.push(newToDo); //pushes the new ToDos to the list
        this.updateLocalTodos(); // updates list of Todos with new ToDos
        return newToDo; //returns the new todo to your screen
    };
    this.getToDos = function () {  //creates a function to see todo list
        return list; //returns the full list of todos
    };
    this.count = function () { //creates a function to count the # of todos
        return list.length; // returns the number of todos on your list
    };

    this.updateLocalTodos = function () {
        var JSONtodo = {
            "description" = "",
            "status" = "",
        }
    };

    this.getLocalTodos = function () {
        return localStorage.todos;
    };

    this.destroyAllTodos = function () {
        delete localStorage.todos;
    };
};



var getRemoteTodos = function (callback) {
    $.getJSON("http://localhost:8080/todos", function(response))
    callback(response.todos);
});
};

getRemoteTodos(function (todos) {
    var $todolist = $("todoList");
    var $todoTemplate = $("#todoTemplate").html();
    todos.forEach(function (todo) {
        var rendered = _.template($todoTemplate)(todo);
        $todolist.append(rendered);
});
});