import { Document } from './document';

export class Project {
  id!: string;
  name!: string;
  documents?: Document[];
}
