export default function heap(array: any[], key?: string): any[] {
  if (!array.length) throw new Error('must provide a non-empty array');
  if (!Array.isArray(array)) throw new Error('argument must be of type array');
  if (key) {
    const heapifyWithKey = (arr: any[], n: number, i: number): void => {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && arr[left][key] > arr[largest][key]) { // `left/right < n` makes sure child exists
        largest = left;
      } 
      if (right < n && arr[right][key] > arr[largest][key]) {
        largest = right;
      }
      if (largest !== i) {
        // swap elements
        const temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;
        // recursivly continue
        heapifyWithKey(arr, n, largest);
      }
      // if largest did not change, break out
      return;
    }

    const buildMaxHeapWithKey = (arr: any[], n: number): number[] => {
      const startIdx = Math.floor((n / 2)) - 1; // find last non leaf node
      for (let i = startIdx; i >= 0; i--) {
        heapifyWithKey(arr, n, i);
      }
      // heapified array
      return arr;
    }

    const heapSortWithKey = (array: number[]): number[] => {
      const myMaxHeap = buildMaxHeapWithKey(array, array.length);

      for (let i = myMaxHeap.length - 1; i >= 0; i--) {
        // type check
        if (typeof array[i][key] !== 'number') {
          const errorMessage = `expected the key value of element ${i} of input array to be of type number, got ${array[i][key]} instead`;
          throw new Error(errorMessage);
        }
        // swap to remove max element
        let temp = myMaxHeap[0]
        myMaxHeap[0] = myMaxHeap[i]
        myMaxHeap[i] = temp;

        // rebuild heap
        heapifyWithKey(myMaxHeap, i, 0);
      }
      return myMaxHeap // now sorted
    }
    heapSortWithKey(array);

  } else {
    const heapify = (arr: number[], n: number, i: number): void => {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && arr[left] > arr[largest]) { // `left/right < n` makes sure child exists
        largest = left;
      } 
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
      if (largest !== i) {
        // swap elements
        const temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;
        // recursivly continue
        heapify(arr, n, largest);
      }
      // if largest did not change, break out
      return;
    }

    const buildMaxHeap = (arr: number[], n: number): number[] => {
      const startIdx = Math.floor((n / 2)) - 1; // find last non leaf node
      for (let i = startIdx; i >= 0; i--) {
        heapify(arr, n, i);
      }
      // heapified array
      return arr;
    }

    const heapSort = (array: number[]): number[] => {
      let myMaxHeap = buildMaxHeap(array, array.length);

      for (let i = myMaxHeap.length - 1; i >= 0; i--) {
        // type check
        if (typeof array[i] !== 'number') {
          const errorMessage = `expected element ${i} of input array to be of type number, got ${array[i]} instead`;
          throw new Error(errorMessage);
        }
        // swap to remove max element
        let temp = myMaxHeap[0]
        myMaxHeap[0] = myMaxHeap[i]
        myMaxHeap[i] = temp;

        // rebuild heap
        heapify(myMaxHeap, i, 0);
      }
      return myMaxHeap // now sorted
    } // end
    heapSort(array);
  }
  return array;
}
