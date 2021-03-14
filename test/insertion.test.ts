import { insertion } from '../src/index';

describe('Insertion sort', () => {
  it('should numerically order an unordered array', () => {
    const exampleArr = [1, 3, 5, 6, 4, 2, 8, 1];
    expect(insertion(exampleArr)).toEqual(exampleArr.sort());
  });
  it('should numerically order an unordered array of objects', () => {
    const exampleArr = [{ id: 3 }, { id: 1 }, { id: 9 }, { id: 8 }];
    const soln = [{ id: 1 }, { id: 3 }, { id: 8 }, { id: 9 }];
    const inserted = insertion(exampleArr, 'id');
    let match = true;
    for (let i = 0; i < exampleArr.length; i++) {
      if (inserted[i].id !== soln[i].id) {
        match = false;
        break;
      }
    }
    expect(match).toBe(true);
  });
  it('should throw error if array is empty', () => {
    expect(() => insertion([])).toThrow(Error);
    expect(() => insertion([], 'key')).toThrow(Error);
  });
  it('should throw error if array containes non number value', () => {
    const exampleArr = [1, 3, 5, 'hello'];
    const exampleArr2 = [1, 3, 5, false];
    expect(() => insertion(exampleArr)).toThrow(Error);
    expect(() => insertion(exampleArr2)).toThrow(Error);
  });
  it('should throw error if array of objects containes key/val pair with not numerical val', () => {
    const exampleArr = [{ id: 3 }, { id: 'hello' }, { id: 9 }, { id: 8 }];
    const exampleArr2 = [{ id: 3 }, { id: false }, { id: 9 }, { id: 8 }];
    expect(() => insertion(exampleArr, 'id')).toThrow(Error);
    expect(() => insertion(exampleArr2, 'id')).toThrow(Error);
  });
});
