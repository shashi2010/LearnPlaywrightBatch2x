# JavaScript Learning & Examples

A small collection of JavaScript examples and Playwright learning notes used for study and demos.

**Project layout**
- Playwrightlearning/Chapter2_JS Basic/ — core study files and notes
- LearnPlaywrightBatch2x/Chapter1/ — earlier examples
- Key files:
  - [Playwrightlearning/Chapter2_JS Basic/01_keywords.js](Playwrightlearning/Chapter2_JS%20Basic/01_keywords.js)
  - [Playwrightlearning/Chapter2_JS Basic/VS_CODE_Keyword_shorcut_Window.md](Playwrightlearning/Chapter2_JS%20Basic/VS_CODE_Keyword_shorcut_Window.md)

**How to run**
- Run any example with Node.js:
  - `node Playwrightlearning/Chapter2_JS Basic/01_keywords.js`
- Use VS Code for editing and quick previews.

**Identifier rules (summary)**
- Allowed characters: letters, digits, `_`, `$`.
- Must not start with a digit.
- Case-sensitive.
- Cannot be a reserved keyword (e.g., `class`, `const`).
- No spaces or hyphens.

**Naming conventions**
- Variables & functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Classes/constructors: `PascalCase`
- Files: pick `kebab-case` or `lowerCamelCase` and stay consistent
- Boolean names: prefix with `is`, `has`, `should` (e.g., `isVisible`)

**Notes on keywords**
- Avoid using reserved words as identifiers. See `01_keywords.js` for examples and explanations.

**VS Code (Windows)**
- Handy shortcuts and a full list are in the linked file above.
- Common: `Shift+Alt+F` (format), `Ctrl+P` (open file), `Ctrl+` (toggle terminal).

**Contributing**
- Keep examples small and focused.
- Use ESLint + Prettier if you add many files.
- Add descriptive commit messages.

**License**
- Add a license file if you plan to publish or share publicly.
