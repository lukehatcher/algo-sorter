export default function merge(array: any[], key?: string): any[] {
  if (key) {
    function mergeSortWithKey(array) {
      const midpoint = array.length / 2;
      if (array.length === 1) return array; // base case
    
      const left = array.splice(0, midpoint);
      return mergeTwoArraysWithKey(mergeSortWithKey(left), mergeSortWithKey(array));
    }
    function mergeTwoArraysWithKey(left: any[], right: any[]): any[] {
      let merged = [];
      while (left.length && right.length) {
        if (left[0][key] < right[0][key]) {
          merged.push(left[0]);
          left.shift();
        } else {
          merged.push(right[0]);
          right.shift();
        }
        }
      // add on any extra (if lengths dont match)
      return [...merged, ...left, ...right];
    }
    array = mergeSortWithKey(array);

  } else {
    function mergeSortNoKey(array) {
      const midpoint = array.length / 2;
      if (array.length === 1) return array; // base case
    
      const left = array.splice(0, midpoint);
      return mergeTwoArrays(mergeSortNoKey(left), mergeSortNoKey(array));
    }

    function mergeTwoArrays(left: any[], right: any[]): any[] {
      let merged = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          merged.push(left[0]);
          left.shift();
        } else {
          merged.push(right[0]);
          right.shift();
        }
        }
      // add on any extra (if lengths dont match)
      return [...merged, ...left, ...right];
    }
    array = mergeSortNoKey(array);
  }
  return array;
}



https://stackabuse.com/merge-sort-in-javascript/

// test cases

// const ans = merge([22, 44, 1, 11, 8, 9]);
// console.log(ans);
const a = [{id: 22}, {id: 44}, {id: 1}, {id: 11}, {id: 8}, {id: 9}];

const ans = merge(a, 'id');
console.log(ans);

