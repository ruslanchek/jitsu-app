export const PATHS = {
  MAIN: '/',
  PROJECTS: '/projects',
  PROJECT_TASKS: '/projects/:projectId/tasks',
  DOCUMENT_TASK: '/projects/:projectId/tasks/:documentId',
  DOCUMENT_TASK_CONVERSATION: '/projects/:projectId/tasks/:documentId/conversation',
  DOCUMENT_TASK_TIMELINE: '/projects/:projectId/tasks/:documentId/timeline',
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_INVITE: '/auth/invite/:code',
};
export const ANONYMOUS_ONLY_PATHS = [PATHS.AUTH_LOGIN, PATHS.AUTH_REGISTER];
export const AUTHORIZED_REDIRECT_PATH = PATHS.MAIN;
export const UNAUTHORIZED_REDIRECT_PATH = PATHS.AUTH_LOGIN;
