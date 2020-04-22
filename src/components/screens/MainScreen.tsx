import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';
import { H2 } from '../ui/typography/H2';
import { Disclaimer } from '../ui/typography/Disclaimer';
import { FormLabel } from '../ui/label/FormLabel';
import { Button } from '../ui/button/Button';
import { Input } from '../ui/form/Input';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='max-w-md'>
          <div className='mb-8'>
            <div className='flex justify-center mb-6'>
              <img src={require('../../img/cive.svg')} className='h-14' />
            </div>
            <H2>Sign in to your account</H2>
          </div>
          <div className='rounded-lg overflow-hidden shadow px-10 py-8 bg-white'>
            <form action=''>
              <div>
                <FormLabel attrs={{ htmlFor: 'email' }}>Email</FormLabel>
                <Input attrs={{ id: 'email', autoComplete: 'email' }} />
              </div>
              <div className='mt-4'>
                <FormLabel attrs={{ htmlFor: 'password' }}>Password</FormLabel>
                <Input attrs={{ id: 'password', type: 'password', autoComplete: 'current-password' }} />
              </div>
              <div className='mt-8'>
                <Button
                  attrs={{
                    type: 'submit',
                  }}>
                  Log in
                </Button>
              </div>
            </form>
          </div>
          <div className='text-center mt-8'>
            <Disclaimer>
              <p>
                Since we are a 100% distributed team, you can work from anywhere. No need to move for a job. We are
                proud of a culture of communication, collaboration, trust and kindness.
              </p>
            </Disclaimer>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};
