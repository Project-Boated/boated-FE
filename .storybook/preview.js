import { ThemeProvider } from 'styled-components';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { GlobalStyle } from '@/styles/GlobalStyle';
import Theme from '@/styles/Theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
