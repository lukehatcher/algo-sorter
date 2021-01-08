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
- quick sort<br>
**divide and conqure algorithms:**<br>
- merge sort
- heap sort (coming soon)
- radix sort (coming soon)

## API
`bubble(array[, key])`<br>
`insertion(array[, key])`<br>
`selection(array[, key])`<br>
`merge(array[, key])`<br>

parameter | type | required | default | notes
----------|------|----------|---------|------
`array` | number[] or obj[] | y | - | A 1D array of numbers or an array of objects. If an array of objects is passed, a key *must* be provided.
`key` | string | n | - | The key for the values that the array of objects will be sorted against

`quick(array[, key[, low [, high]]])`<br>

parameter | type | required | default | notes
----------|------|----------|---------|------
`array` | number[] or obj[] | y | - | A 1D array of numbers or an array of objects. If an array of objects is passed, a key *must* be provided.
`key` | string | n | - |The key for the values that the array of objects will be sorted against. If you want to configure the `high` and `low` sorting conditions for an array of numbers you *must* pass `null`.
`low` | number | n | `0` | The starting index.
`high` | number | n | `array.length - 1` | The ending index.


## TODO
- [ ] add algos
- [ ] write tests, add ci
- [ ] improve api docs
- [ ] badges
- [ ] optimize imports
- [ ] optimize html script tag import with https://unpkg.com/
- [ ] handle arrays of length zero and non arrays
