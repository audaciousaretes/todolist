
var todolist = function () {
	var theList = [];

	this.addTask = function (description) {
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


var newlist = new todolist;

var task = function (description) {
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

function createTaskUIHelper(task) {
	var li = document.createElement("li");
	li.innerHTML = task.description;
	li.className = task.getStatus();
	return li;
}

function appendTaskUIHelper (createdLI) {
	document.getElementById("todolist").appendChild(createdLI);
}

function createAppendUIHelper (task) {
	var taskElement = createTaskUIHelper(task);
	appendTaskUIHelper(taskElement);
}

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

// SECTION #2
// Create a todo list constructor
// 	private list
// 	add todo method
// 	get todo list length
// 	show todos
// Create a todo constructor
// 	public description
// 	private status
// 	get status method
// 	set status to "complete" method
// 	set status to "deferred" method



 




