var ToDoList = function () {
	
	var list = [];

	this.addToDo = function (description) {
		list.push(description);
	};
	
	this.getTodos = function () {
		return list;
	};

	this.count = function () {
		return list.length;
	};
};

var tl = new ToDoList();

var todo = function (description) {
	
	this.description = description;
	
	var status = "private";
	
	this.getStatus = function () {
		return status;
	};

	this.complete = function () {
		this.status = "complete";
	};

	this.deffered = function () {
		this.status = "deffered";
	};
};




