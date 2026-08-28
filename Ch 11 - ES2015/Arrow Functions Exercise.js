// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Map Callback

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

// Refactor the above code to use two arrow functions. Turn it into a one-liner. Write an ES2015 Version 

const double = arr => arr.map(val => val * 2);

// Refactor the following function to use arrow functions, replace ALL functions with arrow functions.
// Original Function:
  function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
// New Function with Arrow Functions:
  const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)

  //Connected .map() and .filter() directly to remove intermediate variables (squares, evens).


