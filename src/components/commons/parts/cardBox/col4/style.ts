import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "antd";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div<{
  isRandom?: boolean;
}>`
  background-color: #fff;
  border: 1px solid #dddfe3;
  border-radius: 6px;
  overflow: hidden;

  ${mq[1]} {
    &:last-of-type {
      display: ${props => (props.isRandom ? "none" : "block")};
    }
  }
  ${mq[2]} {
    &:last-of-type {
      display: block
    }
  }
`;
export const ImageBox = styled.div`
  height: 200px;
  overflow: hidden;
  cursor: pointer;
`;
export const Thumbnail = styled(Image)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Container = styled.div`
  padding: 12px;
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
  margin-top: 8px;
  min-height: 36px;
`;
export const Title = styled.h2`
  display: -webkit-box;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  overflow: hidden;
  cursor: pointer;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
export const InfoBox = styled.div`
  display: flex;
  margin-top: 6px;
  align-items: flex-end;
`;
export const TagBox = styled.div`
  margin-left: 6px;
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
