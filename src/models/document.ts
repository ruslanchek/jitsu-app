import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { IDocumentBodyElement } from '../components/ui/document/body/DocumentBody';
import { EDocumentBodyWidget } from '../components/ui/document/body/document-body-widgets';

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

export class DocumentModel {
  id!: string;
  name!: string;
  type!: EDocumentType;
  status!: EDocumentStatus;
  priority!: EDocumentPriority;

  @Transform(value => new Date(value))
  dueDate!: Date;

  data!: IDocumentBodyElement[];
}

@Exclude()
export class DocumentMutationModel {
  @Expose()
  name!: string;

  @Expose()
  status!: EDocumentStatus;

  @Expose()
  priority!: EDocumentPriority;

  @Expose()
  dueDate!: Date;

  @Expose()
  data!: IDocumentBodyElement[];
}

export const DEFAULT_DOCUMENT: DocumentModel = plainToClass(DocumentModel, {
  id: '',
  name: '',
  type: EDocumentType.Document,
  status: EDocumentStatus.Idle,
  priority: EDocumentPriority.Default,
  dueDate: new Date(),
  data: [
    {
      id: '1',
      type: EDocumentBodyWidget.Text,
      data: {},
    },
  ],
});
