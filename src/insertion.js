const insertion = (arr) => {
  // if its an array of integers:
  // neeed to check if string
  for (let i = 0; i < arr.length; i++) {
    const toBeInserted = arr[i];
    let j = i - 1;
    while (j >= 0 || j < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = toBeInserted;
  }
  return arr;
};

module.exports = insertion;
