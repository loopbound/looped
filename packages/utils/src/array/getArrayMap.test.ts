import { getArrayMap } from './getArrayMap';

describe('getArrayMap', () => {
  it('works', () => {
    let array = [
      { id: 'a', name: 'A' },
      { id: 'b', name: 'B' },
      { id: 'c', name: 'C' },
    ];

    let map = getArrayMap(array);

    expect(map.a).toEqual(array[0]);
    expect(map.b).toEqual(array[1]);
    expect(map.c).toEqual(array[2]);
  });

  it('works with custom key', () => {
    let array = [
      { key: 'a', name: 'A' },
      { key: 'b', name: 'B' },
      { key: 'c', name: 'C' },
    ];

    let map = getArrayMap(array, 'key');

    expect(map.a).toEqual(array[0]);
    expect(map.b).toEqual(array[1]);
    expect(map.c).toEqual(array[2]);
  });

  it('throws on invalid key', () => {
    let array = [
      { id: 'a', name: 'A' },
      { id: 'b', name: 'B' },
      { id: 'c', name: 'C' },
    ];

    expect(() => getArrayMap(array, 'key')).toThrowError();
  });
});
