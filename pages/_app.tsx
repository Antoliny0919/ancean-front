import wrapper from '@/redux';
import PropTypes from 'prop-types';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { HahmletFont } from '../styles/font';
import Layout from '../components/common/Layout';

function App({ Component, pageProps }: AppProps) {
  const currentPathName = usePathname();

  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className={HahmletFont.className}>
          <GlobalStyle />
          <NextNProgress
            color="#155B82"
            startPosition={0.3}
            height={4}
            showOnShallow={true}
          />
          <Layout currentPathName={currentPathName}>
            <Component {...props} />
          </Layout>
        </main>
      </ThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
