import React, { FC, useReducer, useState } from 'react';
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

export const DocumentHeader: FC<IProps> = ({ document }) => {
  const { loading: changeLoading, changeDocument } = useChangeDocument();
  const [documentState, setDocumentState] = useReducer((_: any, value: Partial<Document>) => {
    const updatedDocument = { ...document, ...value };
    changeDocument(document.id, updatedDocument);
    return updatedDocument;
  }, document);

  return (
    <DocumentHeaderContainer>
      <DocumentHeaderTitle editable value={documentState.name} onChange={name => setDocumentState({ name })} />
      <DocumentHeaderBarGroup>
        <DocumentHeaderBar
          align='left'
          items={[
            <DocumentHeaderBarId id='254' />,
            <DocumentHeaderBarBookmark mark />,
            <DocumentHeaderBarStatus />,
            <DocumentHeaderBarPriority
              onChange={priority => setDocumentState({ priority })}
              value={documentState.priority}
            />,
            <DocumentHeaderBarDueDate
              date={documentState.dueDate}
              onChange={dueDate => setDocumentState({ dueDate })}
            />,
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
