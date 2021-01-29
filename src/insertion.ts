export default function insertion(arr: any[], key?: string): any[] {
  if (!arr.length) throw new Error('must provide a non-empty array');
  if (!Array.isArray(arr)) throw new Error('argument must be of type array');
  if (key) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i][key] || typeof arr[i][key] !== 'number') {
        throw new Error('must have all numeric elements and key must exist on all items');
      }
      const toBeInserted = arr[i][key];
      let j = i - 1;
      while (j >= 0 && arr[j][key] > toBeInserted) {
        arr[j + 1][key] = arr[j][key];
        j -= 1;
      }
      arr[j + 1][key] = toBeInserted;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        throw new Error('must have all numeric elements');
      }
      const toBeInserted = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > toBeInserted) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
      arr[j + 1] = toBeInserted;
    }
  }
  return arr;
}
