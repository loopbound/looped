import { useEffect, useState } from 'react';

let getValue = <T>(value: T | (() => T)): T => {
  if (typeof value == 'function') return (value as any)();
  return value;
};

export let useControlled = <T>(value: T | (() => T)) => {
  let state = useState(() => getValue(value));

  useEffect(() => {
    let nextValue = getValue(value);

    if (!nextValue) return;
    state[1](nextValue);
  }, [value]);

  return state;
};
