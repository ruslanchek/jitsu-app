import { commonStore } from '../stores/common-store';
import { ProjectModel } from '../models/project';

export const useCurrentProject = () => {
  return {
    currentProject: commonStore.state.currentProject,
    setCurrentProject: (currentProject: ProjectModel | undefined) => {
      commonStore.setState({
        currentProject,
      });
    },
  };
};
