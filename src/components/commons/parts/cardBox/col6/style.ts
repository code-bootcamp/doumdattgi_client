import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div<{ idx: number }>`
  width: calc((100% - 100px) / 3);
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  margin-right: ${props => props.idx === 0 && "25px"};
  margin-left: ${props => props.idx === 2 && "25px"};
`;
export const Container = styled.div`
  padding: 16px;
  background-color: #fafafa;
`;
export const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Category = styled.span`
  display: block;
  font-size: 0.88em;
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.25em;
  color: #bec3c7;
`;
export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
`;
export const TitleBox = styled.div`
  height: 50px;
  margin-top: 8px;
`;
export const Title = styled.h2`
  font-size: 1.13em;
  font-weight: 600;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.span`
  display: block;
  font-weight: 600;
  font-size: 0.88em;
  margin-left: 6px;
`;
