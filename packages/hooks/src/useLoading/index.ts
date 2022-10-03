import { useState } from 'react';

export let useLoading = () => {
  let [loadingIds, setLoadingIds] = useState<string[]>([]);

  let isLoading = (id: string) => loadingIds.includes(id);

  let setLoading = (id: string, loading: boolean) => {
    setLoadingIds(ids => {
      if (loading) {
        return [...ids, id];
      } else {
        return ids.filter(i => i !== id);
      }
    });
  };

  return { isLoading, setLoading };
};
