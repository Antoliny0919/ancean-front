import wrapper from '@/redux';
import PropTypes from 'prop-types';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { HahmletFont } from '../styles/font';

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

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
