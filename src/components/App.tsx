import React, { FC } from 'react';
import { GlobalWrapper } from './common/GlobalWrapper';
import { MainScreen } from './screens/MainScreen';
import { PATHS } from '../common/paths';
import { Router } from '@reach/router';
import { ProjectsScreen } from './screens/ProjectsScreen';
import { ProjectScreen } from './screens/ProjectScreen';

export const App: FC = () => {
  return (
    <GlobalWrapper>
      <Router>
        <MainScreen path={PATHS.MAIN} />
        <ProjectsScreen path={PATHS.PROJECTS} />
        <ProjectScreen path={PATHS.PROJECT} />
      </Router>
    </GlobalWrapper>
  );
};
