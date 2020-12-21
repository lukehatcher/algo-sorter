const bubble = (arr, key) => {
  // if key is provided, the array is an array of objects
  if (key) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        // check that each item has the desired key
        if (!arr[j][key] || typeof arr[j][key] !== 'number') {
          console.error('each item in the array must contain the provided key and its value must be a number');
          return;
        }
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
};

module.exports = bubble;
