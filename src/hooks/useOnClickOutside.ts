import React, { useCallback, useEffect } from 'react';

export function useOnClickOutside(
  handler: (event: React.MouseEvent) => void,
  ref?: React.MutableRefObject<HTMLElement | null>,
  additionalSelector?: string,
) {
  const listener = useCallback(
    (event) => {
      let additionalSelectorElement = null;
      if (additionalSelector) {
        additionalSelectorElement = document.querySelector(additionalSelector || '');
      }
      if (
        !ref?.current ||
        ref.current.contains(event.target) ||
        (additionalSelectorElement && additionalSelectorElement.contains(event.target))
      ) {
        return;
      }

      handler(event);
    },
    [ref, handler],
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []);
}
