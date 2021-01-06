export default function bubble(arr: any[], key?: string): any[] {
  // if key is provided, the array is an array of objects
  if (key) {
    for (let i = 0; i < arr.length - 1; i++) {
      let movement = false;
      for (let j = 0; j < arr.length - 1; j++) {
        // check that each item has the desired key and type
        if (!arr[j][key] || typeof arr[j][key] !== 'number' || typeof arr[j + 1][key] !== 'number') {
          console.error('each item in the array must contain the provided key and its value must be a number');
          return;
        } if (arr[j][key] > arr[j + 1][key]) {
          movement = true;
          const temp = arr[j + 1][key];
          arr[j + 1][key] = arr[j][key];
          arr[j][key] = temp;
        }
      }
      if (!movement) {
        // sorted before (n^2)
        return arr;
      }
    }
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      let movement = false;
      for (let j = 0; j < arr.length - 1; j++) {
        if (typeof arr[j] !== 'number' || typeof arr[j + 1] !== 'number') {
          console.error('all array items must be numbers');
          return;
        } if (arr[j] > arr[j + 1]) {
          movement = true;
          const temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
      if (!movement) {
        // sorted before (n^2)
        return arr;
      }
    }
  }
  return arr;
}

// module.exports = bubble;
