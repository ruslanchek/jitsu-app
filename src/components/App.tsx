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
import { DocumentConversationScreen } from './screens/DocumentConversationScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { DocumentTimelineScreen } from './screens/DocumentTimelineScreen';

export const App: FC = () => {
  return (
    <Providers>
      <Global styles={globalStyles} />
      <Router>
        <LoginScreen path={PATHS.LOGIN} />
        <RegisterScreen path={PATHS.REGISTER} />
        <MainScreen path={PATHS.MAIN} />
        <ProjectsScreen path={PATHS.PROJECTS} />
        <ProjectScreen path={PATHS.PROJECT_TASKS} />
        <DocumentScreen path={PATHS.DOCUMENT_TASK} />
        <DocumentConversationScreen path={PATHS.DOCUMENT_TASK_CONVERSATION} />
        <DocumentTimelineScreen path={PATHS.DOCUMENT_TASK_TIMELINE}/>
      </Router>
    </Providers>
  );
};
