export default function heap(array: any[], key?: string): any[] {
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
      const myMaxHeap = buildMaxHeap(array, array.length);

      for (let i = myMaxHeap.length - 1; i >= 0; i--) {
        // swap to remove max element
        let temp = myMaxHeap[0]
        myMaxHeap[0] = myMaxHeap[i]
        myMaxHeap[i] = temp;

        // rebuild heap
        heapify(myMaxHeap, i, 0);
      }
      return myMaxHeap // now sorted
    }
    heapSort(array);
  }
  return array;
}

// test cases
console.log(heap([{id: 1}, {id: 5}, {id: 8}, {id: 4}, {id: 3}, {id: 0}], 'id'));
// console.log(heap([3, 5, 4, 6, 13, 10, 9, 8, 15, 17]));
