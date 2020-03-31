import { useContext, useRef, useCallback, ReactNode } from 'react';
import { IModalSharedOptions, ModalsContext } from '../components/ui/modals/Modals';
import { IModalProps } from '../components/ui/modals/Modal';

const DEFAULT_OPTIONS: IModalSharedOptions = {
  showOverlay: true,
  closeByOutsideClick: true,
  closeByEscapeKey: true,
};

export const useModal = (renderModalComponent: (props: IModalProps) => ReactNode, options = DEFAULT_OPTIONS) => {
  const modalContext = useContext(ModalsContext);
  const closeHandler = useRef(() => {});

  const close = useCallback(() => {
    if (closeHandler.current) {
      closeHandler.current();
    }
  }, []);

  const open = useCallback(() => {
    modalContext.openModal({
      renderModalComponent: (id) => {
        closeHandler.current = () => modalContext.closeModal(id);
        return renderModalComponent({
          handleClose: closeHandler.current,
        });
      },
      ...options,
    });
  }, [renderModalComponent, options]);

  return {
    open,
    close,
  };
};
