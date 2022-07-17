import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { GlobalStyle } from '@/styles/GlobalStyle';
import Theme from '@/styles/Theme';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

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
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Story />
      </ThemeProvider>
    </QueryClientProvider>
  ),
];
