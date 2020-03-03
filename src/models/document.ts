import { Project } from './project';
import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';

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

@Exclude()
export class Document {
  @Expose({ groups: CT_GROUPS.QUERY })
  id!: string;

  @Expose({ groups: CT_GROUPS.ALL })
  name!: string;

  @Expose({ groups: CT_GROUPS.QUERY })
  type!: EDocumentType;

  @Expose({ groups: CT_GROUPS.ALL })
  status!: EDocumentStatus;

  @Expose({ groups: CT_GROUPS.ALL })
  priority!: EDocumentPriority;

  @Expose({ groups: CT_GROUPS.ALL })
  @Transform(value => new Date(value))
  dueDate!: Date;

  @Expose({ groups: CT_GROUPS.QUERY })
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
