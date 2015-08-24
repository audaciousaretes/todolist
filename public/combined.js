var customers = [
    {first: 'Joe', last: 'Blogs', likesDogs: false},
    {first: 'John', last: 'Smith', likesDogs: true},
    {first: 'Dave', last: 'Jones', likesDogs:false},
    {first: 'Jack', last: 'White', likesDogs: true}
];

var results = customers
    
    .filter(function (person) {
    if (person.first[0] === 'J') {
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