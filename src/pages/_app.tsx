import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../themes';
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
