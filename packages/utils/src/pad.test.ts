import { padNumber } from './pad';

describe('pad', () => {
  it('works', () => {
    expect(padNumber(1, 5)).toEqual('00001');
    expect(padNumber(22, 5)).toEqual('00022');
  });
});
