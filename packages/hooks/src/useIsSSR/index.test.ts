import { renderHook } from '@testing-library/react-hooks';
import { useIsSSR } from '.';

describe('use-is-ssr', () => {
  it('exports', () => {
    expect(typeof useIsSSR).toEqual('function');
  });

  it('works', async () => {
    let { result } = renderHook(() => useIsSSR());
    expect(result.current).toBe(false);
  });
});
