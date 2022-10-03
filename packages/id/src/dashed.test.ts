import { generateDashedId } from './dashed';

describe('dashed', () => {
  it('works', () => {
    let id1 = generateDashedId(4);
    expect(id1.length).toEqual(4 * 4 + 3);
  });
});
