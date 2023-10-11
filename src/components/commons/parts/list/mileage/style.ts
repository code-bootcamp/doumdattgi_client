import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 930px;
  background-color: #fafafa;
  padding: 30px 25px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ImageBox = styled.img`
  width: 280px;
  height: 180px;
  border: 1px solid #e3e4ec;
`;

export const ContainerBody = styled.div`
  display: flex;
  width: 280px;
`;

export const Category = styled.div`
  font-size: 14px;
  color: #333333;
  margin: 12px 0px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const PostTitle = styled.div`
  font-size: 18px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #bec3c7;
`;

export const InfoBox = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
`;

export const UserName = styled.span`
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-left: 6px;
`;
