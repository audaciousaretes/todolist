
function filter (array, callback){
    var newArray = [];
    for (var idx = 0; idx < array.length; idx++) {
    	if (callback(array[idx])) {
    		newArray.push(array[idx]);
    }}
    return newArray;
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function (v) {
    return v%2 === 0
});

console.assert(evens[0] === 2);
console.assert(evens[1] === 4);