// ----------------------------
// The filter, map and sort methods are available to us on the
// Array prototype and work similarly to the way we wrote our functions
// to work.
// Using Array.map() and Array.filter() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then filter for customers who like dogs
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs', likesDogs: false },
    { first: 'John', last: 'Smith', likesDogs: true },
    { first: 'Dave', last: 'Jones', likesDogs: false },
    { first: 'Jack', last: 'White', likesDogs: true }
];

var results = customers
    .filter(function (person) {
        if (person.first[0] === "J") {
        	return person;
        }
    })
    .map(function (person) {
        person.fullname = person.first + " " + person.last;
        return person;
    })
    .filter(function (person) {
        if (person.likesDogs) {
        	return person;
        }
    });
// tests
// ---
console.assert(results[0].fullname === "John Smith");
console.assert(results[1].fullname === "Jack White");
