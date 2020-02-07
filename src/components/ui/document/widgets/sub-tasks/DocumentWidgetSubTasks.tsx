import React, { FC } from 'react';
import { DocumentWidgetSubTaskItem } from './DocumentWidgetSubTaskItem';
import { DocumentWidget } from '../widget/DocumentWidget';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../../locales/EPhrase';
import { FiEdit } from 'react-icons/all';

interface IItem {
  id: string;
  checked: boolean;
  label: string;
}

interface IProps {
  items: IItem[];
}

export const DocumentWidgetSubTasks: FC<IProps> = ({ items }) => {
  return (
    <DocumentWidget
      title={<EOLocale.Text id={EPhrase.Document_Subtasks} />}
      actions={[{ content: <FiEdit />, onClick: () => {} }]}>
      {items.map(item => (
        <DocumentWidgetSubTaskItem key={item.id} label={item.label} checked={item.checked} />
      ))}
    </DocumentWidget>
  );
};
