import React, { FC } from 'react';

export interface IModalProps {
  handleClose: () => void;
}

export const Modal: FC<IModalProps> = ({ children, handleClose }) => {
  return (
    <div className=''>
      {children}
      <div onClick={handleClose} className=''>
        x
      </div>
    </div>
  );
};
