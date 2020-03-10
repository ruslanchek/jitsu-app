import { Store } from 'react-stores';
import { ProjectModel } from '../models/project';

interface IState {
  currentProject: ProjectModel | undefined;
}

export const commonStore = new Store<IState>({
  currentProject: undefined,
});
