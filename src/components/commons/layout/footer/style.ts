import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px solid #bdbdbd;
  background-color: #fafafa;
`;

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
  font-size: 1.25em;
`;
export const Copy = styled.span`
  display: block;
  font-size: 1.13em;
  margin-top: 20px;
`;
export const Text = styled.span`
  display: block;
  margin-top: 20px;
  &:last-of-type {
    margin-top: 80px;
  }
`;
