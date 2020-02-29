import React, { FC, useEffect, RefObject, useState } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { BORDER_RADIUS, BOX_SHADOW, PORTAL_ROOT_SELECTORS, Z_INDEX } from '../../../common/ui';
import { triangle } from 'polished';
import { usePortal } from '../../../hooks/usePortal';
import ReactDOM from 'react-dom';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

interface IProps {
  show: boolean;
  onHide: () => void;
  forwardRef?: RefObject<HTMLElement>;
}

export const DropdownView: FC<IProps> = ({ show, children, onHide, forwardRef }) => {
  const portal = usePortal(PORTAL_ROOT_SELECTORS.DROPDOWNS);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useOnClickOutside( onHide, forwardRef, PORTAL_ROOT_SELECTORS.DROPDOWNS);

  function resize() {
    if(forwardRef?.current) {
      const box = forwardRef.current.getBoundingClientRect();
      setPosition({
        top: box.top + box.height,
        left: box.left + box.width / 2,
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
    return show
      ? ReactDOM.createPortal(
          <div css={styles.root} style={position}>
            <div css={styles.content}>{children}</div>
          </div>,
          portal,
        )
      : null;
  } else {
    return null;
  }
};

const styles = {
  root: css`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 10px);
    z-index: ${Z_INDEX.DROPDOWNS};
  `,

  content: css`
    background-color: ${COLORS.WHITE};
    box-shadow: ${BOX_SHADOW.MEDIUM};
    border-radius: ${BORDER_RADIUS.MEDIUM};

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
};
