const algoSorter = require('../src/index');

describe('Insertion sort', () => {
  it('should numerically order an unordered array', () => {
    const exampleArr = [1, 3, 5, 6, 4, 2, 8, 1];
    expect(algoSorter.insertion(exampleArr)).toEqual(exampleArr.sort());
  });
});
