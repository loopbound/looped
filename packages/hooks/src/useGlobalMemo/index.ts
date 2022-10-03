import { useMemo } from 'react';

export let createGlobalMemo = <I, O>(processor: (arg: I) => O) => {
  let cache = new Map<I, O>();

  let useGlobalMemo = (i: I) =>
    useMemo(() => {
      if (cache.has(i)) return cache.get(i);

      let o = processor(i);
      cache.set(i, o);
      return o;
    }, [i]);

  return useGlobalMemo;
};
