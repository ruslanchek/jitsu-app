import React, { FC, ReactNode } from 'react';
import { Card } from '../../ui/card/Card';
import { H2 } from '../../ui/typography/H2';
import { Disclaimer } from '../../ui/typography/Disclaimer';

interface IProps {
  title: ReactNode;
  subtitle: ReactNode;
}

export const Auth: FC<IProps> = ({ title, subtitle, children }) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 text-gray-800'>
      <div className='max-w-md'>
        <div className='flex justify-center mb-6'>
          <img src={require('../../../assets/img/logo.svg')} className='h-16' alt='Worx' />
        </div>
        <Card>
          <div className='mb-8 text-center'>
            <H2>{title}</H2>
            <p className='flex justify-center mt-1 text-sm text-gray-600'>{subtitle}</p>
          </div>
          {children}
        </Card>
        <div className='text-center mt-8'>
          <Disclaimer>
            <p>
              Since we are a 100% distributed team, you can work from anywhere. No need to move for a job. We are proud
              of a culture of communication, collaboration, trust and kindness.
            </p>
          </Disclaimer>
        </div>
      </div>
    </div>
  );
};
