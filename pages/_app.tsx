import { globalStyle } from "../src/commons/styles/globalStyle";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ApolloSetting>
        <>
          <Global styles={globalStyle} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </>
  );
}
