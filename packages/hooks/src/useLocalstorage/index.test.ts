import { act, renderHook } from '@testing-library/react-hooks';
import { createLocalstorageState } from '.';

describe('use-localstorage', () => {
  it('exports', () => {
    expect(typeof createLocalstorageState).toEqual('function');
  });

  it('returns hook', () => {
    expect(typeof createLocalstorageState('test', {})).toEqual('function');
  });

  it('syncs data', async () => {
    let useState = createLocalstorageState('test1', {
      count: 0,
    });

    let handler = () => {
      let [state, setState] = useState();

      return {
        state,
        setState,
      };
    };

    let { result: result1 } = renderHook(() => handler());
    expect(result1.current.state.count).toBe(0);

    let { result: result2 } = renderHook(() => handler());
    expect(result2.current.state.count).toBe(0);

    act(() => {
      result2.current.setState({ count: 5 });
    });

    expect(localStorage.getItem('[looped]:test1')).toBe('{"count":5}');

    expect(result2.current.state.count).toBe(5);
    expect(result1.current.state.count).toBe(5);
  });

  it('can be accessed from outside', async () => {
    let useState = createLocalstorageState('test2', {
      count: 0,
    });

    let handler = () => {
      let [state, setState] = useState();

      return {
        state,
        setState,
      };
    };

    let { result: result1 } = renderHook(() => handler());
    expect(result1.current.state.count).toBe(0);
    expect(useState.getState().count).toBe(0);

    act(() => {
      result1.current.setState({ count: 5 });
    });

    expect(localStorage.getItem('[looped]:test2')).toBe('{"count":5}');

    expect(result1.current.state.count).toBe(5);
    expect(useState.getState().count).toBe(5);

    act(() => {
      useState.setState({ count: 10 });
    });

    expect(localStorage.getItem('[looped]:test2')).toBe('{"count":10}');

    expect(result1.current.state.count).toBe(10);
    expect(useState.getState().count).toBe(10);
  });
});
