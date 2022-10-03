import { useEffect, useRef, useState } from 'react';

export let useMemoIf = <T>(
  fn: () => T,
  shouldUse: () => boolean,
  deps: any[]
) => {
  let [state, setState] = useState<T | undefined>(undefined);

  let shouldUseRef = useRef(shouldUse);
  shouldUseRef.current = shouldUse;

  useEffect(() => {
    if (shouldUseRef.current()) setState(fn());
  }, deps);

  return state;
};
