export default function (arr: any[], key?: string) {
  if (!arr.length) throw new Error('must provide a non-empty array');
  if (!Array.isArray(arr)) throw new Error('argument must be of type array');
  if (key) {
    const isSorted = function(a: any[]) {
      for (let i = 0; i < arr.length-1; i++) {
        if (typeof arr[i][key] !== 'number') {
          const errorMessage = `expected the key value of element ${i} of input array to be of type number, got ${arr[i][key]} instead`;
          throw new Error(errorMessage);
        }
        if (a[i][key] < a[i+1][key]) continue;
        else return false;
      }
      return true;
    }
    while (!isSorted(arr)) {
      for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * (arr.length-1 - 0 + 1)) + 0;
        let tmp = arr[rand][key];
        arr[rand][key] = arr[i][key];
        arr[i][key] = tmp;
      }
    }
  } else {
    const isSorted = function(a: number[]) {
      for (let i = 0; i < arr.length-1; i++) {
        if (typeof arr[i] !== 'number') {
          const errorMessage = `expected the of element ${i} of input array to be of type number, got ${arr[i]} instead`;
          throw new Error(errorMessage);
        }
        if (a[i] < a[i+1]) continue;
        else return false;
      }
      return true;
    }
    while (!isSorted(arr)) {
      for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * (arr.length-1 - 0 + 1)) + 0;
        let tmp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}