import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';
import { Alert, EAlertType } from '../ui/alert/Alert';
import { H2 } from '../ui/typography/H2';
import { UserAvatar } from '../ui/avatar/UserAvatar';
import { Plan } from '../ui/card/Plan';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <div>
        <H2>Projects</H2>
      </div>
      {/* <Alert type={EAlertType.Info} details='Details' onClick={() => {}}>
        An update is available
      </Alert> */}
      <br />
      <div className='flex'>
        <div className='w-1/5 mr-8'>
          <div className='bg-gray-100 rounded-lg py-4 px-6'>
            <h3 className='font-bold text-xl'>EO Landing</h3>
            <p className='text-sm mt-1'>Creating new landing for all the luxury</p>
            <p className='text-gray-600 text-sm mt-4'>26 December, 2019</p>
            <div className='flex mt-2'>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
            </div>
          </div>

          <div className='bg-gray-100 rounded-lg py-4 px-6 mt-4'>
            <h3 className='font-bold text-xl'>EO Landing</h3>
            <p className='text-sm mt-1'>Creating new landing for all the luxury</p>
            <p className='text-gray-600 text-sm mt-4'>26 December, 2019</p>
            <div className='flex mt-2'>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
              <div className='mr-1'>
                <UserAvatar size='small' />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Plan />
        </div>
      </div>
    </ScreenLayout>
  );
};
