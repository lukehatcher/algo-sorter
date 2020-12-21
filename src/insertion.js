const insertion = (arr, key) => {
  if (key) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i][key] || typeof arr[i][key] !== 'number') {
        console.error('must have all numeric elements and key must exist on all items');
        return;
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
        console.error('must have all numeric elements');
        return;
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
};

module.exports = insertion;
