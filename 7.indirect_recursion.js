// Find the factorial of any digit

let digit = 5;

factorial = (num) => {
  // To stop the loop from infinite looping
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5))