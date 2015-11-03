// Coding by Composing - https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
var _ = require('ramda');
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];
var log = _.compose( console.log, _.map( x => x(CARS) ) );
var exercises = [];

// Exercise 1

// exercises.push( _.compose( _.prop('in_stock'), _.last ) );
var isLastInStock = _.compose( _.prop('in_stock'), _.last );

// Exercise 2

exercises.push( _.compose( _.prop('name'), _.head ) );

// Exercise 3

var _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length; };
exercises.push( _.compose(_average, _.map( c => c.dollar_value )) );

// Exercise 4

var _underscore = _.replace(/\W+/g, '_');
exercises.push(_.compose(_.map( x => _underscore(x.name).toLowerCase() )));

log(exercises);