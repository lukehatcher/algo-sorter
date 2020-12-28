export default function quick(
  array: any[],
  key?: string | null,
  low: number = 0, // left starting point for pointers
  high: number = array.length - 1, // right tarting point for pointers
) {
  if (key) {
    const partition = (arr: number[], left: number, right: number) => {
      const pivot = arr[Math.floor((right + left) / 2)][key]; // middle
      if (typeof pivot !== 'number') {
        array = undefined;
        return;
      }

      while (left <= right) {
        while (arr[left][key] < pivot) {
          if (typeof arr[left][key] !== 'number') {
            array = undefined;
            return;
          }
          left++;
        }
        
        while (arr[right][key] > pivot) {
          if (typeof arr[right][key] !== 'number') {
            array = undefined;
            return;
          }
          right--;
        }

        if (left <= right) {
          const temp = arr[left][key];
          arr[left][key] = arr[right][key];
          arr[right][key] = temp;
          left++;
          right--;
        }
      }
      return left;
    };

    const pivotIdx = partition(array, low, high);
    if (low < pivotIdx - 1) {
      quick(array, key, low, pivotIdx - 1);
    }
    if (pivotIdx < high) {
      quick(array, key, pivotIdx, high);
    }
    return array;
  }
  // if no key provided
  const partition = (arr: number[], left: number, right: number) => {
    const pivot = arr[Math.floor((right + left) / 2)]; // middle
    if (typeof pivot !== 'number') {
      array = undefined;
      return;
    }

    while (left <= right) {
      // if (typeof arr[left] !== 'number' || typeof arr[right] !== 'number') return;
      while (arr[left] < pivot) {
        if (typeof arr[left] !== 'number') {
          array = undefined;
          return;
        }
        left++;
      }
      while (arr[right] > pivot) {
        if (typeof arr[right] !== 'number') {
          array = undefined;
          return;
        }
        right--;
      }

      if (left <= right) {
        if (typeof arr[left] !== 'number' || typeof arr[right] !== 'number') return;
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
        if (typeof arr[left] !== 'number' || typeof arr[right] !== 'number') return;
      }
    }
    return left;
  };

  const pivotIdx = partition(array, low, high);
  if (!pivotIdx) return; // from catch blocks
  if (low < pivotIdx - 1) {
    quick(array, null, low, pivotIdx - 1);
  }
  if (pivotIdx < high) {
    quick(array, null, pivotIdx, high);
  }
  return array;
}

// test code
// const a = [4, 6, 8, 3, 2, 1];
// const b = [{id: 2}, {id: 1}, {id: 0}, {id: -1}];
// console.log(quick(a));
// console.log(quick(b, 'id'));

// TODO:
// allow for key to be provided without providing high/low
// checking for valid array/obj of array (kaving key is not enough...)
