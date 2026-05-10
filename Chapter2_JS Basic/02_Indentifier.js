// JavaScript quick reference: keywords, identifier rules, naming conventions,
// and VS Code shortcuts (Windows).

// ---------- Reserved keywords (examples) ----------
// await, break, case, catch, class, const, continue, debugger, default,
// delete, do, else, export, extends, false, finally, for, function, if,
// import, in, instanceof, let, new, null, return, super, switch, this,
// throw, true, try, typeof, var, void, while, with, yield

// ---------- Identifier rules ----------
/*
- Valid characters: letters (A-Z, a-z), digits (0-9), underscore (_), dollar sign ($).
- Must NOT start with a digit. (e.g., `1var` is invalid).
- Case-sensitive: `myVar` and `myvar` are different.
- Cannot be a reserved keyword (e.g., `class`, `const`).
- No hyphens or spaces allowed.
- Unicode letters are allowed (but avoid for portability).
*/

// Examples (valid/invalid)
let validName = 1;      // OK
let _private = 2;       // OK
let $elem = 3;          // OK
// let 1start = 4;      // INVALID — starts with digit
// let class = 5;       // INVALID — reserved keyword

// ---------- Naming conventions (common best practices) ----------
/*
- Variables & functions: camelCase
- Constants meant as compile-time/static values: UPPER_SNAKE_CASE
- Classes, constructors: PascalCase (UpperCamelCase)
- Files: kebab-case or lowerCamelCase (pick a project convention)
- Boolean variables: prefix with `is`, `has`, `should` (e.g., `isVisible`)
- Private/internal fields (convention): prefix with `_` (e.g., `_cache`)
*/

const MAX_RETRIES = 3;          // UPPER_SNAKE_CASE for constants
let retryCount = 0;             // camelCase for variables

function fetchDataFromApi(url) { // camelCase for functions
  // ...
  return null;
}

class HttpClient {               // PascalCase for classes
  constructor() {
    this._cache = {};
  }
  get(url) { return fetchDataFromApi(url); }
}
const client = new HttpClient();
console.log('client instanceof HttpClient:', client instanceof HttpClient);

// ---------- Short examples demonstrating rules ----------
let myVar = 10;
function doWork() { return myVar * 2; }
console.log('doWork:', doWork());

// ---------- VS Code shortcuts (Windows) ----------
/*
- **Format document**: `Shift+Alt+F`
- **Toggle integrated terminal**: `Ctrl+` (backtick)
- **Comment/uncomment line**: `Ctrl+/`
- **Rename symbol**: `F2`
- **Quick fix / show code actions**: `Ctrl+.`
- **Go to definition**: `F12`
- **Open file by name**: `Ctrl+P`
- **Search in files**: `Ctrl+Shift+F`
- **Save file**: `Ctrl+S`
- **Find in file**: `Ctrl+F`
- **Replace in file**: `Ctrl+H`
*/

// Tip: Choose and document a naming convention for your project and stick to it.
// ESLint + Prettier can enforce naming, formatting, and style rules automatically.