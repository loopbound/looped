import { renderHook } from '@testing-library/react-hooks';
import { createGlobalMemo } from '.';

describe('use-global-memo', () => {
  it('exports', () => {
    expect(typeof createGlobalMemo).toEqual('function');
  });

  it('returns hook', () => {
    expect(typeof createGlobalMemo(() => 1)).toEqual('function');
  });

  it('caches data', async () => {
    expect.assertions(5);

    let useCache = createGlobalMemo((param: string) => {
      expect(['a', 'b'].includes(param)).toBeTruthy();
      return 'cached_' + param;
    });

    let { result: resultA } = renderHook(() => useCache('a'));
    expect(resultA.current).toBe('cached_a');

    let { result: resultB } = renderHook(() => useCache('b'));
    expect(resultB.current).toBe('cached_b');

    let { result: resultA2 } = renderHook(() => useCache('a'));
    expect(resultA2.current).toBe('cached_a');
  });
});
