import React, { FC, useEffect, RefObject, useState, useRef } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { BORDER_RADIUS, BOX_SHADOW, PORTAL_ROOT_SELECTORS, Z_INDEX } from '../../../common/ui';
import { triangle } from 'polished';
import { usePortal } from '../../../hooks/usePortal';
import ReactDOM from 'react-dom';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { CSSTransition } from 'react-transition-group';

interface IProps {
  show: boolean;
  onHide: () => void;
  forwardRef?: RefObject<HTMLElement>;
}

const ANIMATION_TIME = 150;

export const DropdownView: FC<IProps> = ({ show, children, onHide, forwardRef }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const portal = usePortal(PORTAL_ROOT_SELECTORS.DROPDOWNS);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useOnClickOutside(onHide, forwardRef, PORTAL_ROOT_SELECTORS.DROPDOWNS);

  function resize() {
    if (forwardRef?.current && rootRef.current) {
      const box = forwardRef.current.getBoundingClientRect();
      const width = rootRef.current.getBoundingClientRect().width;
      setPosition({
        top: box.top + box.height,
        left: box.left + box.width / 2 - width / 2,
      });
    }
  }

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize, false);
    window.addEventListener('scroll', resize, false);
    return () => {
      window.removeEventListener('resize', resize, false);
      window.removeEventListener('scroll', resize, false);
    };
  }, []);

  if (portal) {
    return ReactDOM.createPortal(
      <CSSTransition timeout={ANIMATION_TIME} in={show} onEntering={resize} unmountOnExit css={styles.animations}>
        <div css={styles.root} style={position} ref={rootRef}>
          <div css={styles.content}>{children}</div>
        </div>
      </CSSTransition>,
      portal,
    );
  } else {
    return null;
  }
};

const styles = {
  root: css`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateY(10px);
    z-index: ${Z_INDEX.DROPDOWNS};
  `,

  content: css`
    background-color: ${COLORS.WHITE};
    box-shadow: ${BOX_SHADOW.MEDIUM};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    max-height: 300px;
    overflow-y: auto;

    &:before {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      z-index: 10;
      transform: translateX(-50%);
      ${triangle({
        pointingDirection: 'top',
        width: '16px',
        height: '10px',
        foregroundColor: COLORS.WHITE,
      })};
    }
  `,

  animations: css`
    &.enter {
      opacity: 0;
      transform: translateY(13px);
    }

    &.enter-active {
      opacity: 1;
      transform: translateY(10px);
      transition: transform ${ANIMATION_TIME}ms, opacity ${ANIMATION_TIME}ms;
    }

    &.exit {
      transform: translateY(10px);
      opacity: 1;
    }

    &.exit-active {
      opacity: 0;
      transform: translateY(13px);
      transition: transform ${ANIMATION_TIME}ms, opacity ${ANIMATION_TIME}ms;
    }
  `,
};
