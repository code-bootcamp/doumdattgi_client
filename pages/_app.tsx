import { globalStyle } from "../src/commons/styles/globalStyle";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { HelmetProvider } from "react-helmet-async";
import TopButton from "../src/components/commons/hooks/custom/useMovetoTop";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    // 페이지가 변경될 때마다 현재 페이지 주소를 sessionStorage 저장
    const storage = globalThis?.sessionStorage;
    const prevPath: string | null = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath ?? "");

    // 현재 페이지 세션 스토리지에 저장
    storage.setItem("currentPath", router.asPath);
  }, [router.asPath]);

  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <HelmetProvider>
            <Global styles={globalStyle} />
            <Layout>
              <TopButton />
              <Component {...pageProps} />
            </Layout>
          </HelmetProvider>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}
