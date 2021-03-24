export default function counting(arr: any[], key?: string) {
  if (!arr.length) throw new Error('must provide a non-empty array');
  if (!Array.isArray(arr)) throw new Error('argument must be of type array');

  // get arr range
  let min = Infinity, max = -Infinity;

  if (key) {
    // key provided
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i][key] || typeof arr[i][key] !== 'number') throw new Error('each item in the array must contain the provided key and its value must be a number');
      min = Math.min(min, arr[i][key]);
      max = Math.max(max, arr[i][key]);
    }
    const len = Math.abs(min - max) + 1;
    const counts = new Array(len).fill(0);

    for (let i = 0; i < arr.length; ++i) {
      ++counts[arr[i][key] - min]; // offset index when min is not 0
    }
    let k = 0; // set each idx of ans
    for (let i = min; i <= max; i++) {
      while (counts[i - min] > 0) {
        arr[k][key] = i;
        k++;
        --counts[i - min];
      }
    }
  } else {
    // key not provided
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i] || typeof arr[i] !== 'number') throw new Error('all array items must be numbers');
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i]);
    }
    const len = Math.abs(min - max) + 1;
    const counts = new Array(len).fill(0);

    for (let i = 0; i < arr.length; ++i) {
      ++counts[arr[i] - min];
    }
    let k = 0;
    for (let i = min; i <= max; i++) {
      while (counts[i - min] > 0) {
        arr[k] = i;
        k++;
        --counts[i - min];
      }
    }
    // alt: nested for loop instead of a nested while loop
    // let k = 0;
    // for (let i = min; i <= max; ++i) {
    //   for (let j = 0; j < counts[i - min]; ++j) {
    //     arr[k] = i;
    //     ++k;
    //   }
    // }
  }
  return arr;
}
