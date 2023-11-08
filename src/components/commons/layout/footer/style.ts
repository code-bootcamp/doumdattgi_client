import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";
import { useRouter } from "next/router";

export const useFooter = () => {
  const router = useRouter();
  const noMargin = ["/mypage/profile/"];
  const isActive = noMargin.includes(router.asPath);

  const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 1px solid #bdbdbd;
    background-color: #fafafa;
    margin-top: ${isActive ? "0" : "150px"};

    ${mq[1]} {
      margin-bottom: 100px;
    }
  `;

  return {
    Wrapper
  }
};

export const Container = styled.div`
  width: 1140px;
  padding: 60px 0;

  ${mq[0]} {
    width: 100%;
    padding: 60px 24px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
`;
export const Copy = styled.span`
  display: block;
  font-size: 1.13rem;
  margin-top: 20px;
`;
export const Text = styled.span`
  display: block;
  margin-top: 20px;
  &:last-of-type {
    margin-top: 80px;
  }
`;
