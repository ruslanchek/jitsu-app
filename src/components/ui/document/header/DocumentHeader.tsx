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
import { DocumentModel } from '../../../../models/document';
import { useChangeDocument } from '../../../../hooks/useChangeDocument';

interface IProps {
  document: DocumentModel;
}

export const DocumentHeader: FC<IProps> = ({ document }) => {
  const { changeDocument } = useChangeDocument();
  const updateDocument = async (updatedDocument: DocumentModel) => {
    await changeDocument(document.id, updatedDocument);
  };
  const [documentState, setDocumentState] = useReducer((_: any, value: Partial<DocumentModel>) => {
    if(!value.name) {
      value.name = document.name;
    }
    if(value.name.length < 3) {
      return document;
    }
    const updatedDocument = { ...document, ...value };
    updateDocument(updatedDocument);
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
            <DocumentHeaderBarStatus value={documentState.status} onChange={status => setDocumentState({ status })} />,
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
