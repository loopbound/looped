import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { useDefined } from '.';

describe('use-controlled', () => {
  it('exports', () => {
    expect(typeof useDefined).toEqual('function');
  });

  it('works', async () => {
    let { result } = renderHook(() => {
      let [state, setState] = useState<any>('test');
      let defined = useDefined(state);

      return {
        state,
        setState,
        defined,
      };
    });

    expect(result.current.state).toBe('test');
    expect(result.current.defined).toBe('test');

    act(() => {
      result.current.setState('test2');
    });

    expect(result.current.state).toBe('test2');
    expect(result.current.defined).toBe('test2');

    act(() => {
      result.current.setState(undefined);
    });

    expect(result.current.state).toBe(undefined);
    expect(result.current.defined).toBe('test2');
  });
});
