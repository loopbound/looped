import { useEffect, useState } from 'react';

let isServerSynced = true;

export let useIsSSR = () => {
  let [isSSR, setIsSSR] = useState(() => isServerSynced);

  useEffect(() => {
    if (typeof window != 'undefined') {
      isServerSynced = false;
      setIsSSR(false);
    }
  }, []);

  return isSSR;
};
