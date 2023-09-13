import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Container = styled.div`
  width: 1140px;
  display: flex;
`;
export const ContentsWrap = styled.div`
  width: 780px;
`;
export const TitleWrap = styled.div`
  padding-bottom: 40px;
`;
export const StatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DateBox = styled.div`
  display: flex;
`;
export const Date = styled.span`
  display: block;
  color: #9797a0;
  font-size: 14px;
  &:last-of-type {
    margin-left: 4px;
  }
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-top: 10px;
`;
export const CategoryBox = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const Tag = styled.div`
  margin-left: 8px;
`;
export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
`;
export const RequireWrap = styled.div`
  padding: 40px 0;
`;
export const RequireBox = styled.div`
  display: flex;
  &:last-of-type {
    margin-top: 24px;
  }
`;
export const RequireTitleBox = styled.div`
  display: flex;
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;
export const RequireTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-left: 6px;
`;
export const RequireContents = styled.span`
  display: block;
  color: #73737a;
  font-size: 18px;
  margin-left: 80px;
`;
export const DetailContentsWrap = styled.div`
  padding: 40px 0;
`;
export const DetailTitle = styled.span`
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
`;
export const DetailContents = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  word-break: break-word;
  margin-top: 20px;
  img {
    max-width: 100%;
  }
`;
export const DetailMapWrap = styled.div`
  padding-bottom: 40px;
`;
export const MapAddress = styled.p`
  font-size: 14px;
  margin-top: 16px;
  color: #666;
`;
export const MapBox = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid #e0e1ea;
  margin-top: 30px;
`;
export const UserWrap = styled.div`
  width: calc(100% - 780px);
  padding-left: 40px;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;
export const ButtonBox = styled.div`
  width: 340px;
`;
export const ListWrap = styled.div`
  margin-top: 30px;
`;
export const ListTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ListTitleBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ListTitleDesc = styled.span`
  display: block;
  color: #717171;
  margin-left: 20px;
`;
export const UnderLineBtn = styled.button`
  color: #ef4444;
  background: none;
  border: none;
  border-bottom: 1px solid #ef4444;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;
export const ListBox = styled.div`
  margin-top: 50px;
`;
export const ListItem = styled.div`
  padding: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ListUserWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const ListUserBox = styled.div`
  margin-left: 20px;
`;

export const ListUserIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
`;
export const ListUserNameBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ListUserName = styled.p`
  font-weight: 600;
  cursor: pointer;
`;
export const ListCreatedAt = styled.span`
  display: block;
  color: #717171;
  font-size: 14px;
  margin-left: 8px;
`;
export const ListContent = styled.p`
  margin-top: 20px;
`;
export const ListBtn = styled.button`
  color: #fff;
  font-weight: 600;
  background: #88b04b;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
`;
export const UserBox = styled.div`
  border: 1px solid #e5e7eb;
  padding: 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserIcon = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
export const UserName = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-top: 24px;
`;
export const CreateBox = styled.div`
  border: 1px solid #e5e7eb;
  padding: 24px;
  margin-top: 24px;
`;
export const CreateText = styled.span`
  display: block;
`;
export const CreateLink = styled.div`
  margin-top: 20px;
  height: 42px;
  color: #ffffff;
  background-color: black;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CreateIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;
