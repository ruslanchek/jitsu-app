import React, { FC } from 'react';
import { createHistory, LocationProvider } from '@reach/router';
const history = createHistory(window as any);

export const RouterLocationProvider: FC = ({ children }) => {
  return <LocationProvider history={history}>{children}</LocationProvider>;
};
