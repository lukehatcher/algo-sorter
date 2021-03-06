# algoSorter
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
    <script src="https://unpkg.com/browse/algo-sorter@1.1.5/dist/"></script>
  </body>
</html>
```

## Algorithms
**comparison based algorithms:**
- bubble sort
- insertion sort
- selection sort
- heap sort

**divide and conqure algorithms:**
- quick sort
- merge sort

**randomized algorithms**
- bogo sort

**coming soon:**
- radix sort (coming soon)
- bucket sort (coming soon)
- counting sort (coming soon)

## API
```javascript
bubble(arr[, sortKey])
insertion(arr[, sortKey])
selection(arr[, sortKey])
merge(arr[, sortKey])
heap(arr[, sortKey])
bogo(arr, [, sortKey])
```

parameter | type | required | default | notes
----------|------|----------|---------|------
`arr` | `number[]` or `obj[]` | yes | - | A 1D array of numbers or an array of objects. If an array of objects is passed, a key *must* be provided.
`sortKey` | `string` | no<sup>*</sup> | - | The key for the values that the array of objects will be sorted against

```javascript
quick(array[, sortKey[, low [, high]]])
```

parameter | type | required | default | notes
----------|------|----------|---------|------
`arr` | `number[]` or `obj[]` | yes | - | A 1D array of numbers or an array of objects. If an array of objects is passed, a key *must* be provided.
`sortKey` | `string` | no<sup>*</sup> | - |The key for the values that the array of objects will be sorted against. If you want to configure the `high` and `low` sorting conditions for an array of numbers you *must* pass `null`.
`low` | `number` | no | `0` | The starting index.
`high` | `number` | no | `array.length - 1` | The ending index.

\* required for arrays of objects only

## Example implementation
```javascript
import { bubble } from 'algo-sorter';

const myArray = [6, 10, 3];
const myArray2 = [{myKey: 6}, {myKey: 10}, {myKey: 3}];

bubble(myArray); // [3, 6, 10]
bubble(myArray2, 'myKey'); // [{myKey: 3}, {myKey: 6}, {myKey: 10}]
```

## Testing with Node
```
$ git clone https://github.com/lukehatcher/algo-sorter.git && cd algo-sorter && npm i && npm run test
```

## Contributions and issues
Pull requests are welcome! Please include tests. Found an error or want to ask a question? Open an [issue](https://github.com/lukehatcher/algo-sorter/issues) and/or visit the [discussion boards](https://github.com/lukehatcher/algo-sorter/discussions)!

#### todos
- [ ] add algos
- [ ] add ci
- [ ] improve api docs
- [ ] badges
- [ ] create repo logo?
