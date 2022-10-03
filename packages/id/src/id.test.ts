import { generateId } from '.';

describe('id', () => {
  it('works', () => {
    let id1 = generateId('pref_', 10);
    expect(id1.length).toEqual(10 + 5);
    expect(id1.startsWith('pref_')).toEqual(true);
  });
});
