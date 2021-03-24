import { merge } from '../src/index';

describe('merge sort', () => {
  it('should numerically order an unordered array', () => {
    const exampleArr = [2, 3, 5, 9, 4, 2, 8, 1];

    // only passes test if these two log statments are fired
    console.log(exampleArr.sort());
    console.log(merge(exampleArr));
    
    expect(merge(exampleArr)).toEqual(exampleArr.sort((a, b) => a - b));

  });
  it('should numerically order an unordered array of objects', () => {
    const exampleArr = [{ id: 3 }, { id: 1 }, { id: 9 }, { id: 8 }];
    const soln = [{ id: 1 }, { id: 3 }, { id: 8 }, { id: 9 }];
    const merged = merge(exampleArr, 'id');
    let match = true;
    for (let i = 0; i < exampleArr.length; i++) {
      if (merged[i].id !== soln[i].id) {
        match = false;
        break;
      }
    }
    expect(match).toBe(true);
  });
  it('should handle negative numbers okay', () => {
    const exampleArr = [2, -3, 5, 6, 4, 2, 8, 1];

    // only passes test if these two log statments are fired
    console.log(exampleArr.sort());
    console.log(merge(exampleArr));
    
    expect(merge(exampleArr)).toEqual(exampleArr.sort((a, b) => a - b));
  });
  it('should throw error if array is empty', () => {
    expect(() => merge([])).toThrow(Error);
    expect(() => merge([], 'key')).toThrow(Error);
  });
  it('should throw error if array containes string', () => {
    const exampleArr = [1, 3, 5, 'hello'];
    const exampleArr2 = [1, 3, 5, false];
    expect(() => {merge(exampleArr)}).toThrow(Error);
    expect(() => {merge(exampleArr2)}).toThrow(Error);
  });
  it('should throw error if array of objects containes key/val pair with not numerical val', () => {
    const exampleArr = [{ id: 3 }, { id: 'hello' }, { id: 9 }, { id: 8 }];
    const exampleArr2 = [{ id: 3 }, { id: true }, { id: 9 }, { id: 8 }];
    expect(() => {merge(exampleArr, 'id')}).toThrow(Error);
    expect(() => {merge(exampleArr2, 'id')}).toThrow(Error);
  });
});
