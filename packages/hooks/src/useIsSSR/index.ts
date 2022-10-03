import { useEffect, useState } from 'react';

export let useIsSSR = () => {
  let [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(typeof window === 'undefined');
  }, []);

  return isSSR;
};
