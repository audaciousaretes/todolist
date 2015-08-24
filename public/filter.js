function filter(array, callback) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		if (callback(array[i]) === true) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

var evens = filter([1,2,3,4], function (v) {
	return v%2 === 0
});