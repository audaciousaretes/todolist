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

//adding todo
//deleting todo
//change the status
//editing a todo