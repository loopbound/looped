import { renderHook } from '@testing-library/react-hooks';
import { useIsMobile } from '.';

describe('use-is-mobile', () => {
  it('exports', () => {
    expect(typeof useIsMobile).toEqual('function');
  });

  it('works', async () => {
    let { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('works2', async () => {
    let { result } = renderHook(() => useIsMobile(Infinity));
    expect(result.current).toBe(true);
  });
});
