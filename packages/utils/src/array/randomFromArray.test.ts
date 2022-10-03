import { randomFromArray } from './randomFromArray';

describe('randomFromArray', () => {
  it('works', () => {
    let array = ['a', 'b', 'c'];
    expect(array.includes(randomFromArray(array))).toBeTruthy();
  });
});
