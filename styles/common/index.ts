import { css } from 'styled-components';

import Theme from '@/styles/Theme';

export const boxDesign = (borderRadius?: number) => css`
  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${borderRadius ?? 6}px;
`;
