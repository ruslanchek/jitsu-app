import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Conversation } from '../../../../models/conversation';
import { COLORS } from '../../../../common/colors';
import { rgba } from 'polished';
import { DateDistance } from '../../formatters/DateDistance';

interface IProps {
  conversation: Conversation;
}

export const DocumentConversationMessage: FC<IProps> = ({ conversation }) => {
  return (
    <div css={styles.root}>
      <div css={styles.avatar}>{conversation.user.nickname.substr(0, 1)}</div>
      <div>
        <div css={styles.header}>
          <div css={styles.nickname}>{conversation.user.nickname}</div>
          <div css={styles.date}>
            <DateDistance date={conversation.date} />
          </div>
        </div>
        <div css={styles.body}>{conversation.text}</div>
      </div>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    margin-bottom: 20px;
  `,

  avatar: css`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${rgba(COLORS.PURPLE, 0.1)};
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: 400;
    color: ${COLORS.PURPLE};
    margin-right: 20px;
  `,

  header: css`
    display: flex;
  `,

  nickname: css`
    margin-right: 20px;
    font-weight: 500;
  `,

  date: css`
    color: ${COLORS.SMOKE};
  `,

  body: css`
    color: ${COLORS.HIGH_SMOKE};
  `,
};
