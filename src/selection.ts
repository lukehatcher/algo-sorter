export default function selection(arr: any[], key?: string): any[] {
  if (!arr.length) throw new Error('must provide a non-empty array');
  if (!Array.isArray(arr)) throw new Error('argument must be of type array');
  if (key) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i][key] !== 'number' || !arr[i][key]) {
        throw new Error('missing key or non number array value');
      }
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (typeof arr[j][key] !== 'number' || !arr[j][key]) {
          throw new Error('missing key or non number array value');
        } if (arr[j][key] < arr[min][key]) {
          min = j;
        }
      }
      if (arr[min][key] !== arr[i][key]) {
        const currentIdx = arr[i][key];
        arr[i][key] = arr[min][key];
        arr[min][key] = currentIdx;
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        throw new Error('must provide an array of numbers');
      }
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (typeof arr[j] !== 'number') {
          throw new Error('must provide an array of numbers');
        } if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (arr[min] !== arr[i]) {
        const currentIdx = arr[i];
        arr[i] = arr[min];
        arr[min] = currentIdx;
      }
    }
  }
  return arr;
}
