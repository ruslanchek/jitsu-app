import { rgba } from 'polished';
import { COLORS } from './colors';

export const PORTAL_ROOT_SELECTORS = {
  DROPDOWNS: '#root-dropdowns',
  MODALS: '#root-modals',
};

export const Z_INDEX = {
  HEADER: 200,
  MODALS: 1000,
  DROPDOWNS: 1200,
};

export const MAIN_PADDING = {
  VERTICAL: '40px',
  HORIZONTAL: '40px',
};

export const HEADER_HEIGHT = '60px';

export const FONT_FAMILY = "'Rubik', sans-serif";
export const FONT_FAMILY_MONO = "'Ubuntu Mono', monospace;";

export const FONT_SIZE = {
  REGULAR: '16px',
  H1: '28px',
  H2: '22px',
  H3: '18px',
  H4: '16px',
  SMALL: '14px',
};

export const MAX_WIDTH = '1400px';
export const MIN_WIDTH = '800px';

export const HEADER_ELEMENT_HEIGHT = '36px';

export const INPUT_HEIGHT = {
  SMALL: '36px',
  MEDIUM: '40px',
  LARGE: '48px',
};

export const DOCUMENT_SIDE_TOOLS = {
  STICKY_TOP_POSITION: '100px',
  WIDGET_SIZE: '36px',
};

export const DOCUMENT_BUTTON_HEIGHT = '25px';

export const BORDER_RADIUS = {
  SMALL: '3px',
  MEDIUM: '6px',
};

export const BOX_SHADOW = {
  SMALL: `0 1px 4px ${rgba(COLORS.HIGH_SMOKE, 0.15)}`,
  MEDIUM: `0 2px 6px ${rgba(COLORS.HIGH_SMOKE, 0.15)}`,
  LARGE: `0 4px 10px ${rgba(COLORS.HIGH_SMOKE, 0.15)}`,
};

export const MODAL_SIZE = {
  LARGE: '720px',
};
