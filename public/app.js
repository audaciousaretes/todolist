/**
* Make an array

*/

var todoList = [
	"Add a real todo.",
	"Remove fake todos.",
	"Walk the dog.",
	"Create todo list app.",
	"Get the milk."
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

console.log("foo");