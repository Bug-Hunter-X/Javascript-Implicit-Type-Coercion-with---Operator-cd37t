# Javascript Implicit Type Coercion with + Operator

This repository demonstrates a common Javascript bug related to implicit type coercion when using the + operator with numbers and strings.  The bug showcases how Javascript handles the addition of different data types and the potential for unexpected results. The solution provides a method to handle such situations correctly. 

## Bug Description
Javascript's loose typing allows for implicit type coercion. When the + operator is used with a number and a string, Javascript performs string concatenation rather than arithmetic addition. This can lead to unexpected results and errors in applications.  The example shows how this can occur and how to avoid the problem.

## How to Run
1. Clone the repository.
2. Open `bug.js` to see the buggy code.
3. Run `node bug.js` to observe the unexpected output.
4. Open `bugSolution.js` to see the solution code.
5. Run `node bugSolution.js` to see the corrected output.

## Solution
The solution involves explicitly converting the string to a number before performing the addition using `parseInt()` or `Number()`.  This ensures that the + operator performs arithmetic addition as intended.