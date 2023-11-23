import { useEffect } from 'react';
import wrapper from '@/redux';
import PropTypes from 'prop-types';
import type { AppProps } from 'next/app';
import nProgress from 'nprogress';
import { useSearchParams, usePathname } from 'next/navigation';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { HahmletFont } from '../styles/font';
import 'styles/nprogress.scss';

function App({ Component, pageProps }: AppProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { store, props } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    nProgress.done();
  }, [searchParams, pathname]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className={HahmletFont.className}>
          <GlobalStyle />
          <Component {...props} />
        </main>
      </ThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
