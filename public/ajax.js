// What are the HTTP verbs?
// DELETE, GET, PUT, DELETE

/* You can also use this instead of below
$.ajax({
	method: "GET", //Methods should always be uppercase
	url: "http://http://localhost:8080/", //localhost8080 is a JSON API - will return JSON back to us
	success: function (response) { //response is a callback
		console.log(response);
	}
});
*/

//$.getJSON("http://localhost:8080", function(response) {
//	console.log(response);
// });

$.getJSON("http://localhost:8080/todos", function(response) {
	var todos = response.todos;
	// append all todos to my todolist, ideally using lodash
	console.log(todos);
});

function createAndAppendToDoUIHelper (todo) {
	var tmpl = $("#todo-template").text();
	var render = _.template(tmpl);
	$("#todolist").append(render({
		description: toDo.description,
		status: toDo.getStatus
	}));
}