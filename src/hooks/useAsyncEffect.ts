import { useEffect } from 'react';

export function useAsyncEffect(effect: () => void) {
  useEffect(() => {
    (async () => {
      await effect();
    })();
  }, []);
}
