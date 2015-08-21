var todoList = function () {
	var list = [];

	this.addTodo = function (description) {
		var newTodo = new todo(description);
		list.push(newTodo);
		createAndAppendUIHelper(newTodo);
	};

	this.getTodos = function () {
		return list;
	};

	this.count = function () {
		return list.length;
	};
};

var tl = new todoList();

var todo = function (description) {
	this.description = description;
	var status = "incomplete";

	this.getStatus = function () {
		return status;
	};

	this.complete = function () {
	status = "complete";
	};

	this.deferred = function() {
	status = "Deferred";
	};
};

function createTodoUIHelper (todo) {
	var li = document.createElement("li");
	li.innerHTML = todo.description;
	li.className = todo.getStatus();
	return li;
}

function appendTodoUIHelper (createdLI) {
	document.getElementById("todolist").appendChild(createdLI);
}

function createAndAppendUIHelper (todo) {
	var toDoElement = createTodoUIHelper(todo);
	appendTodoUIHelper(toDoElement);
}

function setupListener () {
	var formNodes = document.getElementsByTagName("form");
	var form = formNodes[0];
	form.addEventListener("submit", function (event){
		event.preventDefault();
		var description = document.getElementById("todoitem").value;
		tl.addTodo(description);
		document.getElementById("todoitem").value = "";
});
}

setupListener();

