
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


var tl = new todolist;

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

var todolistElement = $("#todoList");

var todolist = [{
	description: "Do your homework",
	status: "incomplete"
},{
	description: "Train the evil puppy",
	status: "incomplete"
},{
	description: "Do the dishes",
	status: "incomplete"
}];

var templateStr = $("todo-template").text();
var renderTemplate = _.template(templateStr);

_.each(todoList, function (todo) {
	var newHtml = renderTemplate(task);
	todoListElement.append(newHTML);
});

$("form").on("submit", function(e) {
	e.preventDefault();
	var todoText = $("#createTodoInput").val();
	todolistElement.append("<li>" + todoText + "</li>");
});


