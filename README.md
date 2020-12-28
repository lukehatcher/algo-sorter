# algo-sorter
*sort arrays using your algorithm of choice*

Compatible with JavaScript, TypeScript, Node.js and the browser.

## Installation
```sh
$ npm install algo-sorter
```

## Importing
```javascript
// Using Node.js `require()`
const algoSorter = require('algo-sorter');

// Using ES6/TypeScript imports
import algoSorter from 'algo-sorter';
```
## Import via script tag
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script src="YOUR_PATH_HERE/node_modules/algo-sorter/dist/algoSorter.js"></script>
  </body>
</html>
```

## Algorithms
- bubble sort
- insertion sort
- selection sort

## API
- .bubble(array[, key])
- .insertion(array[, key])
- .selection(array[, key])

### Parameters
- `array` (required): A 1D array of numbers or an array of objects. If an array of objects is passed, a key must be provided.
- `key` (optional): The key for the values that the array of objects will be sorted against

## TODO
- [ ] write tests
- [ ] API documentation table
- [ ] add algos
- [ ] optimize imports
- [ ] optimize html script tag import with https://unpkg.com/
- [ ] rearange npm dependencies
- [ ] handle arrays of length zero and non arrays
