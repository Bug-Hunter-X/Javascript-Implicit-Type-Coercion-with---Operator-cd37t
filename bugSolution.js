function foo(a, b) {
  // Explicit type conversion
  return a + Number(b);
}

function bar() {
  return foo(1, '2');
}

console.log(bar()); // Output: 3

//Alternative using parseInt
function foo2(a, b) {
  return a + parseInt(b, 10);
}

function bar2() {
  return foo2(1, '2');
}

console.log(bar2()); //Output: 3