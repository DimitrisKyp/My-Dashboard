import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/globall.css';
import { theme } from '../themes';
import Layout from '../layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
