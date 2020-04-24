import React, { FC } from 'react';
import { RiCheckboxCircleLine, RiInformationLine, RiErrorWarningLine, RiArrowRightLine } from 'react-icons/ri';
import classnames from 'classnames';

export enum EAlertType {
  Info,
  Error,
  Success,
}

interface IProps {
  onClick: () => void;
  type: EAlertType;
  title?: string;
  details?: string;
}

export const Alert: FC<IProps> = ({ type, title, details, children }) => {
  let icon;

  switch (type) {
    case EAlertType.Info: {
      icon = <RiInformationLine className='text-2xl mr-4 w-6 flex-shrink-0' />;
      break;
    }
    case EAlertType.Error: {
      icon = <RiErrorWarningLine className='text-2xl mr-4 w-6 flex-shrink-0' />;
      break;
    }
    case EAlertType.Success: {
      icon = <RiCheckboxCircleLine className='text-2xl mr-4 w-6 flex-shrink-0' />;
      break;
    }
  }

  return (
    <div
      className={classnames(
        'cursor-pointer rounded-lg flex justify-between px-6 py-4 w-1/2 transition-colors duration-200',
        {
          'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700': type === EAlertType.Info,
          'bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700': type === EAlertType.Error,
          'bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700': type === EAlertType.Success,
        },
      )}>
      <div className='flex-col'>
        {title && (
          <strong className='flex items-center'>
            {icon} {title}
          </strong>
        )}
        <div
          className={classnames('flex justify-between items-center', {
            'pl-10': title,
          })}>
          {!title && icon} {children}
        </div>
      </div>
      {details && (
        <span className='flex ml-10 items-center'>
          Details <RiArrowRightLine className='text-xl ml-1' />
        </span>
      )}
    </div>
  );
};
