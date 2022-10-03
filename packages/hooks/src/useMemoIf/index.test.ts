import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { useMemoIf } from '.';

describe('use-memo-if', () => {
  it('exports', () => {
    expect(typeof useMemoIf).toEqual('function');
  });

  it('works', async () => {
    let active = true;

    let { result } = renderHook(() => {
      let [state, setState] = useState<any>('test');
      let value = useMemoIf(
        () => state,
        () => active,
        [state]
      );

      return {
        state,
        setState,
        value,
      };
    });

    expect(result.current.state).toBe('test');
    expect(result.current.value).toBe('test');

    active = false;

    act(() => {
      result.current.setState('test2');
    });

    expect(result.current.state).toBe('test2');
    expect(result.current.value).toBe('test');

    active = true;

    act(() => {
      result.current.setState('test3');
    });

    expect(result.current.state).toBe('test3');
    expect(result.current.value).toBe('test3');
  });
});
