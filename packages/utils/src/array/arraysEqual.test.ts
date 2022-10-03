import { arraysEqual } from './arraysEqual';

describe('arraysEqual', () => {
  it('matches', () => {
    let array1 = ['a', 'b', 'c'];
    let array2 = ['a', 'b', 'c'];

    expect(arraysEqual(array1, array2)).toBeTruthy();
  });

  it('does not match', () => {
    let array1 = ['a', 'b', 'c'];
    let array2 = ['a', 'b', 'd'];

    expect(arraysEqual(array1, array2)).toBeFalsy();
  });

  it('does not match with different length', () => {
    let array1 = ['a', 'b', 'c'];
    let array2 = ['a', 'b', 'c', 'd'];

    expect(arraysEqual(array1, array2)).toBeFalsy();
  });
});
