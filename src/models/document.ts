import { Project } from './project';
import { plainToClass, Transform } from 'class-transformer';

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

export class Document {
  id!: string;
  name!: string;
  type!: EDocumentType;
  status!: EDocumentStatus;
  priority!: EDocumentPriority;

  @Transform(value => new Date(value))
  dueDate!: Date;

  project?: Project;
}

export const DEFAULT_DOCUMENT: Document = plainToClass(Document, {
  id: '',
  name: '',
  type: EDocumentType.Document,
  status: EDocumentStatus.Idle,
  priority: EDocumentPriority.Default,
  dueDate: new Date(),
});