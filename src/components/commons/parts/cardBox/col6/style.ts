import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "antd";

export const Wrapper = styled.div`

`;
export const ImageBox = styled.div`
  height: 180px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #E3E4EC;
  border-radius: 6px;
`;
export const Thumbnail = styled(Image)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Container = styled.div`
  padding-top: 12px;
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
  cursor: pointer;

  &:hover {
    color: #fde047;
  }
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
  display: inline-block;
  font-size: 1.13em;
  font-weight: 600;
  line-height: 22px;
  overflow: hidden;
  cursor: pointer;
  text-overflow: ellipsis;
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
