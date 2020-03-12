export const PATHS = {
  MAIN: '/',
  PROJECTS: '/projects',
  PROJECT_TASKS: '/projects/:projectId/tasks',
  DOCUMENT_TASK: '/projects/:projectId/tasks/:documentId',
  DOCUMENT_TASK_CONVERSATION: '/projects/:projectId/tasks/:documentId/conversation',
  DOCUMENT_TASK_TIMELINE: '/projects/:projectId/tasks/:documentId/timeline',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
};

export const ANONYMOUS_ONLY_PATHS = [PATHS.LOGIN, PATHS.REGISTER];

export const AUTHORIZED_REDIRECT_PATH = PATHS.MAIN;
export const UNAUTHORIZED_REDIRECT_PATH = PATHS.LOGIN;
