import { IDocument } from './document';

export interface IProject {
  id: string;
  name: string;
  documents?: IDocument[];
}
