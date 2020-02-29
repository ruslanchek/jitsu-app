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

export const DocumentHeader: FC = () => {
  const [date, setDate] = useState(new Date());
  function handleChangeDate(date: Date) {
    setDate(date);
  }
  return (
    <DocumentHeaderContainer>
      <DocumentHeaderTitle editable value='Frontend Collective: Week #1' />
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
