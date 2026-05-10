// Common reserved keywords: await, break, case, catch, class, const, continue, debugger, default, delete, do, else, enum, export, extends, false, finally, for, function, if, import, in, instanceof, let, new, null, return, super, switch, this, throw, true, try, typeof, var, void, while, with, yield


var v=10;
v=20;
console.log(v);

// JavaScript reserved keywords — brief explanation + examples
// Reserved keywords are used by the language syntax and cannot be used
// as identifiers (variable, function, class names). Using them as names
// causes syntax errors or future-compatibility problems.
//
// Common categories:
// - Declarations: var, let, const, function, class, import, export
// - Control flow: if, else, switch, case, for, while, do, break, continue, return
// - Error handling: try, catch, finally, throw
// - Async/Concurrency: async, await
// - Operators/Type: typeof, instanceof, new, in, void, delete
// - Literals/values: null, true, false
// - Others: this, super, yield, debugger, with
//
// Notes:
// - Prefer `let` and `const` over `var`. `let`/`const` are block-scoped.
// - `const` creates an immutable binding (the value may still be mutable).
// - `async`/`await` simplify working with Promises.
// - Avoid using keywords as identifiers to prevent syntax errors.

//
// Examples
//

// 1) var vs let vs const
var v = 10;
v = 20; // var can be reassigned and re-declared
let x = 3;
// let x = 4; // SyntaxError: Identifier 'x' has already been declared
const y = 5;
// y = 6; // TypeError: Assignment to constant variable

console.log('var v:', v, 'let x:', x, 'const y:', y);

// 2) function & class (declaration keywords)
function greet(name) {
  return `Hello, ${name}`;
}
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return greet(this.name);
  }
}
const p = new Person('Alex');
console.log(p.sayHi());

// 3) async / await (asynchronous control flow)
async function fetchData() {
  // Simulate async work; in real code you'd await a Promise
  return 'fakedata';
}
async function run() {
  const result = await fetchData();
  console.log('async result:', result);
}
run();

// 4) try / catch / throw (error handling)
function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    throw new Error('Invalid JSON string');
  }
}
// Example usage commented out to avoid crashing at runtime:
// parseJSON('not-json');

// 5) typeof and instanceof (type checks)
console.log('typeof p:', typeof p); // "object"
console.log('p instanceof Person:', p instanceof Person);

// Tip: For a complete, authoritative list consult MDN Web Docs (ECMAScript keywords).
// Avoid using reserved words as variable/function/class names to keep code valid.