# algo-sorter
*sort arrays using your algorithm of choice*

- works with numeric arrays as well as arrays of objects
- Compatible with JavaScript, TypeScript, Node.js and the browser.

## Installation
with npm:
```sh
$ npm install algo-sorter
```
with yarn:
```sh
$ yarn add algo-sorter
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

## Example implementation
```javascript
import { bubble } from 'algo-sorter';

const myArray = [6, 10, 3];
const myArray2 = [{myKey: 6}, {myKey: 10}, {myKey: 3}];

bubble(myArray); // [3, 6, 10]
bubble(myArray2, 'myKey'); // [{myKey: 3}, {myKey: 6}, {myKey: 10}]
```

## Algorithms
**comparison based algorithms:**
- bubble sort
- insertion sort
- selection sort
- heap sort<br>

**divide and conqure algorithms:**
- quick sort
- merge sort<br>

**coming soon:**
- radix sort (coming soon)
- bucket sort (coming soon)
- counting sort (coming soon)

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

## Testing with node
```sh
$ git clone https://github.com/lukehatcher/algo-sorter.git
$ cd algo-sorter && npm i && npm run test
```

## Contributions and issues
Pull requests are welcome! Please include tests. Found an error or want to ask a question? Open an [issue](https://github.com/lukehatcher/algo-sorter/issues) and/or visit the [discussion boards](https://github.com/lukehatcher/algo-sorter/discussions)! :D

## TODO
- [ ] add algos
- [ ] create repo logo
- [ ] write tests, add ci
- [ ] improve api docs
- [ ] badges
- [ ] optimize imports
- [ ] optimize html script tag import with https://unpkg.com/
- [ ] handle arrays of length zero and non arrays
