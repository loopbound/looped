import { act, renderHook } from '@testing-library/react-hooks';
import delay from 'delay';
import { useDebounce } from '.';

describe('use-debounce', () => {
  it('exports', () => {
    expect(typeof useDebounce).toEqual('function');
  });

  it('delays updates', async () => {
    let { result } = renderHook(() => useDebounce('a', 500));

    expect(result.current.value).toBe('a');
    expect(result.current.debouncedValue).toBe('a');
    expect(typeof result.current.setValue).toBe('function');

    act(() => {
      result.current.setValue('b');
    });

    expect(result.current.value).toBe('b');
    expect(result.current.debouncedValue).toBe('a');

    await delay(500);

    expect(result.current.value).toBe('b');
    expect(result.current.debouncedValue).toBe('b');
  });
});
