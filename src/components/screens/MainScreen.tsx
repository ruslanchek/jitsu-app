import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';
import { H2 } from '../ui/typography/H2';
import { UserAvatar } from '../ui/avatar/UserAvatar';
import { Plan } from '../ui/card/Plan';
import { RiTimeLine, RiTeamLine, RiCalendarEventLine } from 'react-icons/ri';

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
        <div className='w-1/4 mr-8'>
          <div className='bg-gray-200 rounded-lg px-4 py-3'>
            <h3 className='font-bold'>Weekly Scrum Meeting</h3>
            <div className='text-sm mt-5 flex items-center h-1'>
              <RiTimeLine className='text-base mr-3' />
              12:40pm to 1:30pm &bull; 50 min
            </div>
            <div className='text-sm mt-5 flex items-center h-1'>
              <RiTeamLine className='text-base mr-3' />
              Frontend team
            </div>
            <div className='text-sm mt-5 flex items-center h-1'>
              <RiCalendarEventLine className='text-base mr-3' />
              26 December, 2019
            </div>
            <div className='flex mt-6'>
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
