import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Link, RouteComponentProps } from '@reach/router';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProject } from '../../hooks/useProject';
import { useSubscription } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { PATHS } from '../../common/paths';

interface IProps extends RouteComponentProps {
  id?: string;
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

export const ProjectScreen: FC<IProps> = ({ id }) => {
  const { loading, project } = useProject(id);
  const { data } = useSubscription(DOCUMENT_CREATED_SUBSCRIPTION);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ScreenWrapper>
      {project && (
        <div css={styles.root}>
          {project.name}

          <h2>Documents</h2>
          <div>
            {project?.documents?.map(document => {
              const documentPath = PATHS.TASK.replace(':projectId', project.id).replace(':id', document.id);
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
  `,

  main: css`
    padding: 40px 0;
  `,
};
