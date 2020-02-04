import React, { FC, useEffect, Fragment } from 'react';

export const GlobalHandlersProvider: FC = ({ children }) => {
  const onDrop = (event: any) => {
    try {
      if(!event.target.closest('[data-dragndrop]')) {
        event.preventDefault();
      }
    } catch (e) {}
  };

  const onDragover = (event: any) => {
    try {
      if(!event.target.closest('[data-dragndrop]')) {
        event.preventDefault();
      }
    } catch (e) {}
  };

  useEffect(() => {
    window.addEventListener('drop', onDrop, false);
    window.addEventListener('dragover', onDragover, false);

    return () => {
      window.removeEventListener('drop', onDrop, false);
      window.removeEventListener('dragover', onDragover, false);
    };
  }, []);

  return <Fragment>{children}</Fragment>;
};
