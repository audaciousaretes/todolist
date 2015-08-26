function map (array, callback){
    var newArray = [];
    for (var idx = 0; idx < array.length; idx++) {
    	newArray.push(callback(array[idx], idx));
    }
    return newArray;
}

// tests
// ---
var squares = map([1, 2, 3, 4], function (v) {
    return v*v
});

console.assert(squares[0] === 1);
console.assert(squares[1] === 4);
console.assert(squares[2] === 9);
console.assert(squares[3] === 16);