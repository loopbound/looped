import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { useControlled } from '.';

describe('use-controlled', () => {
  it('exports', () => {
    expect(typeof useControlled).toEqual('function');
  });

  it('works', async () => {
    let { result } = renderHook(() => {
      let [state, setState] = useState<any>('test');
      let [controlled, setControlled] = useControlled(state);

      return {
        state,
        setState,
        controlled,
        setControlled,
      };
    });

    expect(result.current.state).toBe('test');
    expect(result.current.controlled).toBe('test');

    act(() => {
      result.current.setState('test2');
    });

    expect(result.current.state).toBe('test2');
    expect(result.current.controlled).toBe('test2');

    act(() => {
      result.current.setState(undefined);
    });

    expect(result.current.state).toBe(undefined);
    expect(result.current.controlled).toBe('test2');

    act(() => {
      result.current.setControlled('test3');
    });

    expect(result.current.state).toBe(undefined);
    expect(result.current.controlled).toBe('test3');
  });
});
