import { IProject } from './project';

export enum EDocumentType {
  Task,
  Story,
  Document,
}

export enum EDocumentPriority {
  Default,
  Low,
  Medium,
  High,
}

export enum EDocumentStatus {
  Idle,
  Paused,
  InProgress,
  Completed,
  Archived,
}

export interface IDocument {
  id: string;
  name: string;
  type: EDocumentType;
  status: EDocumentStatus;
  priority: EDocumentPriority;
  project?: IProject;
}