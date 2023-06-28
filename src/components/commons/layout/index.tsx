import { useRouter } from "next/router";
import Header from "./header";
import Nav from "./nav";
import LayoutFooter from "./footer/index";
import Header2 from "./header2";
import styled from "@emotion/styled";
import { Fragment } from "react";

const HIDDEN_HEADER = [
  "/signup/",
  "/login/",
  "/accountRecovery/email/",
  "/accountRecovery/password/",
  "/recoveryResult/password/",
  "/recoveryResult/email/",
  "/editPassword/"
];
const HIDDEN_NAV = ["/mypage/profile/"];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export default function Layout(props: any) {
  const router = useRouter();
  const isActive = HIDDEN_HEADER.includes(router.asPath);
  const isNavActive = HIDDEN_NAV.includes(router.asPath);
  return (
    <Wrapper>
      <div>
        {isActive ? (
          <Header2 />
        ) : (
          <>
            {!isNavActive ? (
              <>
                <Header />
                <Nav />
              </>
            ) : (
              <Header />
            )}
          </>
        )}
        <div>{props.children}</div>
      </div>
      {!isActive && <LayoutFooter />}
    </Wrapper>
  );
}
