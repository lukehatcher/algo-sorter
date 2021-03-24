export default function merge(array: any[], key?: string): any[] {
  if (!array.length) throw new Error('must provide a non-empty array');
  if (!Array.isArray(array)) throw new Error('argument must be of type array');
  if (key) {
    const mergeSortWithKey = (array: any[]): any[] => {
      const midpoint = Math.floor(array.length) / 2;
      if (array.length === 1) return array; // base case
    
      const left = array.splice(0, midpoint);
      return mergeTwoArraysWithKey(mergeSortWithKey(left), mergeSortWithKey(array));
    }
    const mergeTwoArraysWithKey = (left: any[], right: any[]): any[] => {
      let merged = [];
      while (left.length && right.length) {
        if (typeof left[0][key] !== 'number' || typeof right[0][key] !== 'number') {
          throw new Error('all key values of array shoud be of type number');
        }
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
    const mergeSortNoKey = (array: number[]): number[] => {
      const midpoint = Math.floor(array.length) / 2;
      if (array.length === 1) return array; // base case
    
      const left = array.splice(0, midpoint);
      return mergeTwoArrays(mergeSortNoKey(left), mergeSortNoKey(array));
    }

    const mergeTwoArrays = (left: number[], right: number[]): number[] => {
      let merged = [];
      while (left.length && right.length) {
        if (typeof left[0] !== 'number' || typeof right[0] !== 'number') {
          throw new Error('all elements of array shoud be of type number');
        }
        if (left[0] < right[0]) {
          merged.push(left[0]);
          left.shift();
        } else {
          merged.push(right[0]);
          right.shift();
        }
        }
      return [...merged, ...left, ...right];
    }
    array = mergeSortNoKey(array);
  }
  return array;
}
