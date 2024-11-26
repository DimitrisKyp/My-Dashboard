import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import Layout from "../layout";
import "../styles/globall.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const isClient = typeof window !== "undefined";

  return (
    <Provider store={store}>
      {isClient ? (
        <PersistGate loading={null} persistor={persistor!}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}
