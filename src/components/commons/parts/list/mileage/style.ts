import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const MileageWrap = styled.section`
  padding: 30px 24px;
  background: #fafafa;
  margin-bottom: 60px;

  ${mq[3]} {
    padding: 24px 16px;
  }
`;
export const MileageTitleBox = styled.div`
  display: flex;
  align-items: end;

  ${mq[3]} {
    flex-direction: column;
    align-items: baseline;
  }
`;
export const MileageTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;
export const MileageSubTitle = styled.span`
  display: block;
  margin-left: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  color: #888;

  ${mq[3]} {
    margin-top: 6px;
  }
`;
export const MileageBox = styled.div<{
  isAll: boolean;
  isRandom?: boolean;
}>`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 20px;

  ${mq[1]} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq[3]} {
    grid-template-columns: 1fr 1fr;
  }
`;
