export default function selection(arr: any[], key: string) {
  if (key) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i][key] !== 'number' || !arr[i][key]) {
        console.error('missing key or non number array value');
        return;
      }
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (typeof arr[j][key] !== 'number' || !arr[j][key]) {
          console.error('missing key or non number array value');
          return;
        } else if (arr[j][key] < arr[min][key]) {
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
        console.error('must provide an array of numbers');
        return;
      }
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (typeof arr[j] !== 'number') {
          console.error('must provide an array of numbers');
          return;
        } else if (arr[j] < arr[min]) {
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
};
// const a = [1, 5, 7, 3, 5];
// const b = [{ id: 5 }, { id: 3 }, { id: 2 }];
// console.log(selection(b, 'id'));

// module.exports = selection;
