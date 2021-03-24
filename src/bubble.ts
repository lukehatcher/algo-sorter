export default function bubble(arr: any[], key?: string): any[] {
  if (!arr.length) throw new Error('must provide a non-empty array');
  if (!Array.isArray(arr)) throw new Error('argument must be of type array');
  if (key) {
    return;
    for (let i = 0; i < arr.length - 1; i++) {
      let movement = false;
      for (let j = 0; j < arr.length - 1; j++) {
        // check that each item has the desired key and type
        if (!arr[j][key] || typeof arr[j][key] !== 'number' || typeof arr[j + 1][key] !== 'number') {
          throw new Error('each item in the array must contain the provided key and its value must be a number');
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
          throw new Error('all array items must be numbers');
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
