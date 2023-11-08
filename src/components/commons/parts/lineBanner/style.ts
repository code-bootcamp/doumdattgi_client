import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #88b04b;
  position: relative;
  z-index: 999;

  ${mq[2]} {
    display: none;
  }
`;
export const Container = styled.div`
  width: 1140px;
  padding: 8px 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mq[0]} {
    width: 100%;
    padding: 8px 24px;
  }
  ${mq[2]} {
    padding: 8px 16px;
  }
  ${mq[6]} {
    padding: 12px 16px;
  }
`;
export const Contents = styled.div`
  display: flex;
  align-items: center;

  ${mq[6]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Title = styled.p`
  color: #111;
  font-size: 1.13rem;
  font-weight: 600;
  word-break: keep-all;
`;
export const LinkWrap = styled.div`
  display: flex;
  font-size: 0.88rem;
  color: #111;
  margin-left: 16px;

  ${mq[6]} {
    margin-left: 0;
    margin-top: 6px;
  }
`;
export const Link = styled.a`
  color: #fff;
  font-weight: 600;
  display: block;
  margin-left: 10px;
  border-bottom: 2px solid #fff;
  cursor: pointer;
  font-size: 0.88rem;
`;
export const CloseWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const CloseText = styled.p`
  cursor: pointer;
  font-size: 0.88rem;
  color: #111;
  word-break: keep-all;
`;
export const CloseIcon = styled(FontAwesomeIcon)`
  padding: 8px;
  font-size: 1.5rem;
  color: #111;
  cursor: pointer;
  margin-left: 10px;
`;
export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
`;
