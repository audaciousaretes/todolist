var todolist = [
	"walk the dog.", 
	"get the milk.", 
	"remove fake todos.", 
	"add a real todo." 
	"create todo list app."];


var addItem = function (item) {
	return todolist.push(item);
};

var getItemCount = function () {
	return todolist.length;
};

var getAllItems = function () {
	return todolist; 
};

var removeItem = function (placeInList) {
	return todolist.splice(placeInList, 1);
};

var getItem = function (placeInList) {
	return todolist[placeInList];
};