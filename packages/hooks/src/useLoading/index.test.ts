import { act, renderHook } from '@testing-library/react-hooks';
import { useLoading } from '.';

describe('use-loading', () => {
  it('exports', () => {
    expect(typeof useLoading).toEqual('function');
  });

  it('works', async () => {
    let { result } = renderHook(() => useLoading());

    expect(result.current.isLoading('a')).toBe(false);
    expect(result.current.isLoading('b')).toBe(false);
    expect(typeof result.current.setLoading).toBe('function');

    act(() => {
      result.current.setLoading('a', true);
    });

    expect(result.current.isLoading('a')).toBe(true);
    expect(result.current.isLoading('b')).toBe(false);

    act(() => {
      result.current.setLoading('a', false);
    });

    expect(result.current.isLoading('a')).toBe(false);
    expect(result.current.isLoading('b')).toBe(false);
  });
});
