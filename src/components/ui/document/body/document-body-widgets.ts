export interface IDocumentBodyWidget {
  id: number;
  type: EDocumentBodyWidget;
}

export enum EDocumentBodyWidget {
  Subtasks = 'subtasks',
  Text = 'text',
  Code = 'code',
}

export const DOCUMENT_BODY_WIDGETS: IDocumentBodyWidget[] = [
  {
    id: 1,
    type: EDocumentBodyWidget.Text,
  },
  {
    id: 2,
    type: EDocumentBodyWidget.Subtasks,
  },
  {
    id: 3,
    type: EDocumentBodyWidget.Code,
  },
];
