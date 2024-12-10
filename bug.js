function foo(a, b) {
  return a + b;
}

function bar() {
  return foo(1, '2');
}

console.log(bar()); // Output: "12"

// Explanation: Javascript does not throw an error when you use + operator for a number and a string. It just does string concatenation. This could lead to unexpected behavior if you expect it to do arithmetic addition.