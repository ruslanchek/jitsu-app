import { Store } from 'react-stores';
import { ProjectModel } from '../models/project';
import { UserMeModel } from '../models/user';

interface IState {
  me: UserMeModel | undefined;
  authorized: boolean | undefined;
  currentProject: ProjectModel | undefined;
  appReady: boolean;
}

export const commonStore = new Store<IState>({
  me: undefined,
  currentProject: undefined,
  authorized: undefined,
  appReady: false,
});
