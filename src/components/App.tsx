import React, { FC } from 'react';
import { MainScreen } from './screens/MainScreen';
import { PATHS } from '../common/paths';
import { Router } from '@reach/router';
import { ProjectsScreen } from './screens/ProjectsScreen';
import { ProjectScreen } from './screens/ProjectScreen';
import { Providers } from './common/Providers';
import { globalStyles } from '../common/global-styles';
import { Global } from '@emotion/core';
import { DocumentScreen } from './screens/DocumentScreen';

export const App: FC = () => {
  return (
    <Providers>
      <Global styles={globalStyles} />
      <Router>
        <MainScreen path={PATHS.MAIN} />
        <ProjectsScreen path={PATHS.PROJECTS} />
        <ProjectScreen path={PATHS.PROJECT} />
        <DocumentScreen path={PATHS.TASK} />
      </Router>
    </Providers>
  );
};
