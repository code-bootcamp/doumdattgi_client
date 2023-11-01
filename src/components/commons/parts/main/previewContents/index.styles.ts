import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  /* width: calc((100% - 20px) / 2); */
  border-radius: 6px;
  border: 1px solid #dddfe3;
  padding: 14px;
  cursor: pointer;
`;
export const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.span`
  font-size: 0.88em;
  display: block;
  font-weight: 500;
`;
export const TitleBox = styled.div`
  margin-top: 8px;
`;

export const Title = styled.h2`
  font-size: 1.13em;
  font-weight: 600;
  line-height: 1.38em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.25em;
  color: #bec3c7;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TagBox = styled.div`
  display: flex;
  & div:last-of-type {
    margin-left: 6px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const NickName = styled.div`
  font-size: 0.88em;
  font-weight: 600;
  margin-left: 6px;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
`;
