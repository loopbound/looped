import { prettyFileSize } from './fileSize';

describe('fileSize', () => {
  it('works', () => {
    expect(prettyFileSize(1)).toEqual('1 B');
    expect(prettyFileSize(1024)).toEqual('1.0 kB');
    expect(prettyFileSize(1024 ** 2)).toEqual('1.0 MB');
  });
});
