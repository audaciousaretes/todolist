function map (array, callback) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		newArray.push(callback(array[i], i));
	}
	return newArray;
}
var squares = map([1,2,3,4], function (v) {
	return v*v
});