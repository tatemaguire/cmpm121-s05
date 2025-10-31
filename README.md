# Section 5 – Refactoring Code Smells in Practice

## Code Smells

- Primitive obsession
  - The use of constants for button IDs and header is confusing
- Short names (c, bI, bC, etc)
- Excessive comments
- Duplicate code
  - Several parts of the code update the page after the counter changes

## Refactorings

- Removed button ID constants
- Renamed variables to be more descriptive
- Removed comments in favor of more detailed variable names
- Extracted page update code into a function
