function forEach (array, callback){
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// tests
// ---
var total = 1;
forEach([1, 2, 3, 4], function (a) {
    total *= a;
});

console.assert(total === 24);