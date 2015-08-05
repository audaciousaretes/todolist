
/**
* Make an array

*/

var todoList = [
	"Add a real todo.",
	"Remove fake todos.",
	"Walk the dog.",
	"Create todo list app.",
	"Get the milk.",
	"Read a book",
	"Talk to Chase",
];

//"Walk the dog"


var addItem = function (item) {
	return todoList.push(item);
};

var getItemCount = function () {
	return todoList.length;
};

var getAllItems = function () {
	return todoList; 
};

var removeItem = function (placeInList) {
	return todoList.splice(placeInList, 1);
};

var getItem = function (placeInList) {
	return todoList[placeInList];
};

var ri = Math.floor(Math.random() * todoList.length);
var rs = todoList.splice(ri, 1);
console.log(rs);
console.log(todoList);

console.log("foo");

/*...........*/
var bestClass = [ "Mychelle", "Frank", "Byron", "Nick", "Chase"];

// bestClassNamesLength = [7,5,5,4,5];
var bestClassNamesLength = bestClass.map(function (name) {
	return name.length;
});

var bestClassNamesLength = bestClass.map(function (name) {
	return name.split("");
});	 //separates letter, each letter will be its own string



var bestClassNamesLength = bestClass.map(function (name){
	return name.split("").join(" ");
});

var bestClassNamesLength = bestClass.map(function (name){
	return name.indexOf("My");
}); /*this will search indexes in array and provide where it's located using -1 
    or 2 meaning that the character 
    is in the 2nd spot; which is actually the 3rd spot*/

var bestClassNamesLength = bestClass.map(function (name){
	return name.split("").join(" ");
}); 

//Objects are collections of things; a key or a word

var person = {  //This is where you define the object
	name: "Chase",
	likes: ["Walking the dog", "writing code", "tourturing students"],
	age : 31,
	height: {
		feet: 6,
		inches: 1
	},
	sayHello: function (friend) {
		return "Hello" + friend + 
		", my name is " + this.name + 
		" and I like " + this.likes.join(",") + 
		".";
	}
}; 

function person (name, likes, age, height) {
	this.name = name || "no name present";
	this.likes = likes || "no likes present";
	this
}

var getMilk = { //below is a 
	description: "Get the milk.",
	status: "incomplete",
	expired: false,
	echoTodoDetails: function () {
		var expired = "not expired"; 
		if (this.expired) {
			expired = "expired";
		}

		return this.description + " is " + this.status + " and is " + expired;
	},

	markCompleted: function () {
		this.status = "complete";
	}
};

//Javascript Construtor => always call with the new keyword
//constuctors will always be written with functions

//"this" inside of a constructor

/*	-Create a todo list constructor
		- private list (var)
		- add todo method (make a method to add something)
		- get todo list length
		- show todos
	- Create a todo constructor
		- pubilic description (this)
		- get description method
		- set descrption method (which should be update)
		- private status
		- get status method
		- set status to "complete" method
		- set status to "deferred" method ()

	Deliverable:
		- Working console todo list, where I can't break things...
			- todo list
			- status

		I should be able to add to, list and see the length of your todolist
		I should be able to see a list of object methods on your todo item

	getter => gets the value of whateverr you're asking for
	setter => set the value of whatever your're asking for
*/

var todoList = [];

var Todo = function (description) {  //var will make it a private variable 
	this.description = description;  //this will make it a public variable
	this.status = "incomplete";

	this.getStatus = function () {
		this.status = "complete";
	};

	function setStatus (description) {
		status = description;
	}

	this.complete = function
};

var newTodo = new Todo("Get the milk."); //use of the word new


var todoList = [
	new Todo("get the milk"),
	new Todo("build something awesome"),
	new Todo("walk the dog")
];

function addTodo (description) {
	var newTodo = new Todo(description); //creates a new todo
	todoList.push(newTodo);
}



