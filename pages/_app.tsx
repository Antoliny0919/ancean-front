import wrapper from '@/redux';
import PropTypes from 'prop-types';
import type { AppProps } from 'next/app';
// import NextTopLoader from 'nextjs-toploader';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { HahmletFont } from '../styles/font';
import 'styles/nprogress.scss';

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className={HahmletFont.className}>
          <GlobalStyle />
          {/* <NextTopLoader
            color={theme.colors.mainColor[4]}
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow={`0 0 10px ${theme.colors.mainColor[4]},0 0 5px ${theme.colors.mainColor[4]}`}
            zIndex={1600}
            showAtBottom={false}
          /> */}
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
