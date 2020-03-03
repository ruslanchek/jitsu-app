import React, { FC, useState } from 'react';
import { DocumentHeaderBarGroup } from './DocumentHeaderBarGroup';
import { DocumentHeaderBar } from './DocumentHeaderBar';
import { DocumentHeaderBarId } from './DocumentHeaderBarId';
import { DocumentHeaderBarBookmark } from './DocumentHeaderBarBookmark';
import { DocumentHeaderBarStatus } from './DocumentHeaderBarStatus';
import { DocumentHeaderBarPriority } from './DocumentHeaderBarPriority';
import { DocumentHeaderBarDueDate } from './DocumentHeaderBarDueDate';
import { DocumentHeaderBarAssignedTo } from './DocumentHeaderBarAssignedTo';
import { DocumentHeaderBarLabel } from './DocumentHeaderBarLabel';
import { DocumentHeaderTitle } from './DocumentHeaderTitle';
import { DocumentHeaderBarUpdatedDate } from './DocumentHeaderBarUpdatedDate';
import { DocumentHeaderBarTags } from './DocumentHeaderBarTags';
import { DocumentHeaderContainer } from './DocumentHeaderContainer';
import { Document } from '../../../../models/document';
import { useChangeDocument } from '../../../../hooks/useChangeDocument';

interface IProps {
  document: Document;
}

export const DocumentHeader: FC<IProps> = ({document}) => {
  const [date, setDate] = useState(document.dueDate);
  const { loading: changeLoading, changeDocument } = useChangeDocument();
  function handleChangeDate(date: Date) {
    setDate(date);
    changeDocument(document.id, {dueDate: date});
  }
  return (
    <DocumentHeaderContainer>
      <DocumentHeaderTitle editable value={document.name} />
      <DocumentHeaderBarGroup>
        <DocumentHeaderBar
          align='left'
          items={[
            <DocumentHeaderBarId id='254' />,
            <DocumentHeaderBarBookmark mark />,
            <DocumentHeaderBarStatus />,
            <DocumentHeaderBarPriority />,
            <DocumentHeaderBarDueDate date={date} onChange={handleChangeDate} />,
            <DocumentHeaderBarAssignedTo user='m_brtn' />,
            <DocumentHeaderBarLabel />,
          ]}
        />
      </DocumentHeaderBarGroup>
      <DocumentHeaderBarGroup>
        <DocumentHeaderBar
          align='left'
          items={[
            <DocumentHeaderBarUpdatedDate user='m_brtn' date={new Date()} />,
            <DocumentHeaderBarTags tags={['Asana', 'Connectivity', 'CSS']} />,
          ]}
        />
      </DocumentHeaderBarGroup>
    </DocumentHeaderContainer>
  );
};
