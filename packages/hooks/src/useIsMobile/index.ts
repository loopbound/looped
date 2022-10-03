import { useEffect, useState } from 'react';

export let useIsMobile = (threshold: number = 700) => {
  let [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window == 'undefined') return;

    let handle = () => {
      setIsMobile(window.innerWidth < threshold);
    };

    handle();

    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  return isMobile;
};
