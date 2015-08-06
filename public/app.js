var toDoList = function () {
	var list = [];
	this.addToDo = function (description) {
		var newToDo = new toDo(description);
		list.push(newToDo);
		createAndAppendToDoUIHelper(newToDo);
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

function createToDoUIHelper (toDo) {
	var li = document.createElement("li");
	li.innerHTML = toDo.description;
	li.className = toDo.getStatus();
	return li;
}

function appendToDoUIHelper (createdLI) {
	document.getElementById("todolist").appendChild(createdLI);
}

function createAndAppendToDoUIHelper (toDo) {
	var toDoElement = createToDoUIHelper(toDo);
	appendToDoUIHelper(toDoElement);
}

function setupListener () {
	var formNodes = document.getElementsByTagName("form");
	var form = formNodes[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		var description = document.getElementById("todoitem").value;
		tl.addToDo(description);
		document.getElementById("todoitem").value = "";
	});
}
setupListener();