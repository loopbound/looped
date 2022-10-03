import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';

export let useDebounce = <T>(initial: T, delay: number = 500) => {
  let [value, setValue] = useState(() => initial);
  let [debouncedValue, setDebouncedValue] = useState(() => initial);

  let debouncedSet = useCallback(debounce(setDebouncedValue, delay), []);

  return {
    value,
    debouncedValue,
    setValue: (v: T) => {
      setValue(v);
      debouncedSet(v);
    },
  };
};
