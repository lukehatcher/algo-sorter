import { bogo } from '../src/index';

describe('Bubble sort', () => {
  it('should numerically order an unordered array', () => {
    const exampleArr = [1, 3, 2];
    expect(bogo(exampleArr)).toEqual(exampleArr.sort((a, b) => a - b));
  });
  it('should numerically order an unordered array of objects', () => {
    const exampleArr = [{ id: 3 }, { id: 1 }, { id: 2 }];
    const soln = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const res = bogo(exampleArr, 'id');
    let match = true;
    for (let i = 0; i < exampleArr.length; i++) {
      if (res[i].id !== soln[i].id) {
        match = false;
        break;
      }
    }
    expect(match).toBe(true);
  });
  it('should throw error if array is empty', () => {
    expect(() => bogo([])).toThrow(Error);
    expect(() => bogo([], 'key')).toThrow(Error);
  });
  it('should handle negative numbers okay', () => {
    const exampleArr = [-1, 3, 2];
    expect(bogo(exampleArr)).toEqual(exampleArr.sort((a, b) => a - b));
  });
  it('should throw error if array containes non int', () => {
    const exampleArr = [1, 3, 5, 'hello'];
    const exampleArr2 = [1, 3, 5, false];
    expect(() => bogo(exampleArr)).toThrow(Error);
    expect(() => bogo(exampleArr2)).toThrow(Error);
  });
  it('should throw error if array of objects containes key/val pair with non int val', () => {
    const exampleArr = [{ id: 3 }, { id: 'hello' }, { id: 9 }, { id: 8 }];
    const exampleArr2 = [{ id: 3 }, { id: true }, { id: 9 }, { id: 8 }];
    expect(() => bogo(exampleArr, 'id')).toThrow(Error);
    expect(() => bogo(exampleArr2, 'id')).toThrow(Error);
  });
});
