import { IProject } from './project';

export interface IDocument {
  id: string;
  name: string;
  project?: IProject;
}