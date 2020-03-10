import React, { FC } from 'react';
import { css } from '@emotion/core';
import { DocumentModel } from '../../../../models/document';
import { useTimelines } from '../../../../hooks/useTimelines';
import { DateFormatter } from '../../formatters/DateFormatter';

interface IProps {
  document: DocumentModel;
}

export const DocumentTimeline: FC<IProps> = ({ document }) => {
  const { loading, timelines } = useTimelines(document.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (timelines) {
    return (
      <div css={styles.root}>
        <div css={styles.inner}>
          <div css={styles.stickyBottom}>
            {timelines.map(timeline => (
              <div key={timeline.id}>
                {timeline.eventName}
                <br />
                <DateFormatter date={timeline.date} time />
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const styles = {
  root: css`
    height: 100%;
    overflow: auto;
  `,

  inner: css``,

  stickyBottom: css`
    position: sticky;
  `,
};
