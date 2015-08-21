// what are the HTTP verbs? 
// POST, GET, PUT, DELETE

// $.ajax({
// 	method: "GET",
// 	url: "http://localhost:8080",
// 	success: function (response) {
// 		console.log(response);
// 	}
// });

var getRemoteTodos = function (callback) {
	$.getJSON("http://localhost:8080/todos", function (response) {
		callback(response.todos)
	});
};
getRemoteTodos (function(todos) {
	var $todolist = $("#todolist");
	var $todoTemplate = $("#todo-template").html();
	todos.forEach(function (todo) {
		var rendered = _.template($todoTemplate)(todo);
		$todolist.append(rendered);
	});
});
