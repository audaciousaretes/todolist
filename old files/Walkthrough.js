
var todolist = function () {
	var theList = [];

	this.addTodo = function (description) {
		var newTask = new task(description);
		theList.push(newTask);
		createAppendUIHelper(newTask);
	};

	this.count = function () {
		return theList.length;
	};

	this.listTasks = function () {
		return theList;
	};
};


var tl = new todolist;

var todo = function (description) {
	this.description = description;
	var status = "incomplete";

	this.completed = function () {
	status = "completed";
	};

	this.deferred = function() {
	status = "Deferred";
	};

	this.getStatus = function() {
	return status;
	};
};



function createAppendUIHelper (todo) {
	var tmpl = $("#todo-template").text();
		var render = _.template(tmpl); //tmpl is the text inside the template
		$("#todolist").append(render)({
			description: toDo.description,
			status: toDo.getStatus()
		}));
}

/*
function setupListener () {
	var formNodes = document.getElementsByTagName("form");
	var form = formNodes[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		var description = document.getElementById("newtask").value;
		newlist.addTask(description);
		document.getElementsById("newtask").value = "";
	};
}

setupListener ();
*/
//REPLACE THE ABOVE WITH:

function setupListener () {
	$("form").on("submit", function(event) {
		event.preventDefault();
		var description = $("#createTodoInput").val();
		tl.addToDo(description)
		$("#createTodoInput").val("");
	};
}

setupListener ();