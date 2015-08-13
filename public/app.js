var toDoList = function () {
	var list = [];
	this.addToDo = function (description) {
		var newToDo = new toDo(description);
		list.push(newToDo);
		return newToDo;
	};
	this.getToDos = function () {
		return list;
	};
	this.count = function () {
		return list.length;
	};
};
var tl = new toDoList();

var toDo = function (description) {
	this.description = description;
	var status = "incomplete";
	this.getStatus = function () {
		return status;
	};
	this.complete = function () {
		status = "complete";
	};
	this.deffered = function () {
		status = "deffered";
	};
};

function createAndAppendToDoUIHelper (toDo) {
	var tmpl = $("#todo-template").text();
	var render = _.template(tmpl);
	$("#todolist").append(render({
		description: toDo.description,
		status: toDo.getStatus
	}));
}

$("form").on("submit", function(event) {
	event.preventDefault();
	var todoType = $("#todoitem").val();
	var newToDo = tl.addToDo(todoType);
	$("#todoitem").val("");
	createAndAppendToDoUIHelper(newToDo);
});
