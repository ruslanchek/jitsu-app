import { useEffect } from 'react';

export function useAsyncEffect(effect: () => void, deps: any[] = []) {
  useEffect(() => {
    (async () => {
      await effect();
    })();
  }, deps);
}
