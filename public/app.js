var todoList = function () {
	var list = [];

	this.addTodo = function (description) {
		list.push(new todo(description));
	};

	this.getTodos = function () {
		return list;
	};

	this.count = function () {
		return list.length;
	};
};

var tl = new todoList;

var todo = function (description) {
	this.description = description;
	var status = "incomplete";

	this.getStatus = function() {
		return status;
	};

	this.complete = function () {
	status = "complete";
	};

	this.deferred = function() {
	status = "Deferred";
	};
};


