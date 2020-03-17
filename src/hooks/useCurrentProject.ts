import { commonStore } from '../stores/common-store';
import { ProjectModel } from '../models/project';
import { useStore } from 'react-stores';

export const useCurrentProject = () => {
  const state = useStore(commonStore);
  return {
    currentProject: state.currentProject,
    setCurrentProject: (currentProject: ProjectModel | undefined) => {
      if(currentProject?.id !== state.currentProject?.id) {
        commonStore.setState({
          currentProject,
        });
      }
    },
  };
};
