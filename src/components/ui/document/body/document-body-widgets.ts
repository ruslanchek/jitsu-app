export interface IDocumentBodyWidget<TData = any> {
  id: string;
  type: EDocumentBodyWidget;
  defaultData: TData;
}

export enum EDocumentBodyWidget {
  Subtasks = 'subtasks',
  Text = 'text',
  Code = 'code',
}

export const DOCUMENT_BODY_WIDGETS: IDocumentBodyWidget[] = [
  {
    id: '1222',
    type: EDocumentBodyWidget.Text,
    defaultData: {},
  },
  {
    id: '2222',
    type: EDocumentBodyWidget.Subtasks,
    defaultData: {
      items: [
        { id: '1', checked: true, label: 'Todo...' },
      ],
    },
  },
  {
    id: '3333',
    type: EDocumentBodyWidget.Code,
    defaultData: {},
  },
];
