import React, { FC, useEffect } from 'react';
import { css } from '@emotion/core';
import { Link, RouteComponentProps } from '@reach/router';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProject } from '../../hooks/useProject';
import { useSubscription } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { PATHS } from '../../common/paths';
import { MAIN_PADDING } from '../../common/ui';
import { useDocuments } from '../../hooks/useDocuments';
import { useCurrentProject } from '../../hooks/useCurrentProject';

interface IProps extends RouteComponentProps {
  projectId?: string;
}

const DOCUMENT_CREATED_SUBSCRIPTION = gql`
  subscription {
    documentCreated {
      id
      name
      project {
        id
      }
    }
  }
`;

export const ProjectScreen: FC<IProps> = ({ projectId }) => {
  const { setCurrentProject } = useCurrentProject();
  const { loading, project } = useProject(projectId);
  const { data } = useSubscription(DOCUMENT_CREATED_SUBSCRIPTION);
  const { documents } = useDocuments(projectId);

  useEffect(() => {
    setCurrentProject(project);
  }, [project]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ScreenWrapper showHeader>
      {project && (
        <div css={styles.root}>
          {project.name}

          <h2>Documents</h2>
          <div>
            {documents.map(document => {
              const documentPath = PATHS.DOCUMENT_TASK.replace(':projectId', project.id).replace(
                ':documentId',
                document.id,
              );
              return (
                <div key={document.id}>
                  <Link to={documentPath}>{document.id}</Link>
                  {document.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </ScreenWrapper>
  );
};

const styles = {
  root: css`
    overflow: scroll;
    height: 100vh;
    width: 100vw;
  `,

  side: css`
    width: 220px;
    min-width: 220px;
    position: relative;
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,

  main: css`
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,
};
