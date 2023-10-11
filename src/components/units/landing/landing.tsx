import styled from "@emotion/styled";
import LandingWebInfo from "./landingFirst";
import LandingCategory from "./landingSecond";
import LastLandingPage from "./landingThird";

const Wrap = styled.div`
  overflow: scroll;
  scroll-snap-type: y mandatory;

  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;

  & > div {
    scroll-snap-align: start;
  }
`;
export default function LandingWrapper(): JSX.Element {
  return (
    <Wrap>
      <LandingWebInfo />
      <LandingCategory />
      <LastLandingPage />
    </Wrap>
  );
}
