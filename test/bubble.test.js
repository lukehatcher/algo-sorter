const algoSorter = require('../src/index');

describe('bubble sort', () => {
  it('should numerically order an unordered array', () => {
    const exampleArr = [1, 3, 5, 6, 4, 2, 8, 1];
    expect(algoSorter.bubble(exampleArr)).toEqual(exampleArr.sort());
  });
});
