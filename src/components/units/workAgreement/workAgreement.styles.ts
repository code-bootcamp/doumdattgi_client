import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mq } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Container = styled.div`
  width: 1140px;

  ${mq[0]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[2]} {
    padding: 0 16px;
  }
`;
export const CategoryBox = styled.div`
  display: flex;
`;
export const Category = styled.span`
  display: flex;
  color: #636363;
  font-weight: 600;
`;
export const ChevronIcon = styled(FontAwesomeIcon)`
  color: #636363;
  margin: 0 8px;
`;
export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-top: 12px;
`;
export const ProgressWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
export const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProgressIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.create {
    background-color: #c3b5fd;
  }
  &.start {
    background-color: #c9e2fe;
  }
  &.send {
    background-color: #80d6cc;
  }
  &.finish {
    background-color: #f1be80;
  }
`;
export const ProgressCheck = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 20px;
`;
export const ProgressTitle = styled.span`
  font-weight: 600;
  display: block;
  margin-top: 16px;
`;
export const ProgressDate = styled.span`
  font-size: 14px;
  color: #888;
  display: block;
  margin-top: 10px;
  text-align: center;
  line-height: 16px;
`;
export const ProgressBar = styled.div`
  height: 3px;
  width: calc((100% - (100px * 4)) / 3 - 20px);
  background: #ccc;
  margin: 18px 0;
  padding: 0 3px;
  &.create {
    background-color: #c9e2fe;
  }
  &.start {
    background-color: #80d6cc;
  }
  &.send {
    background-color: #f1be80;
  }
`;
export const ServiceWrap = styled.div`
  padding: 0 32px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mq[1]} {
    padding: 0 16px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ServiceTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;
export const TitleHighlight = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #88b04b;
  margin-right: 8px;
`;
export const ServiceBox = styled.div`
  display: flex;
  ${mq[1]} {
    margin-top: 16px;
  }
`;
export const AcceptBtn = styled.button`
  color: #fff;
  background: #88b04b;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &.reject {
    background: none;
    color: #88b04b;
    margin-right: 6px;
  }
`;
export const StatusIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  &.check {
    color: #389e0d;
  }
  &.waiting {
    color: #0958d9;
  }
  &.refuse {
    color: #cf1322;
  }
`;
export const StatusText = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-left: 8px;
`;
export const SectionWrap = styled.div`
  padding: 32px;
  border-radius: 6px;
  background: #f6f7f9;
  margin: 40px 0;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const SectionBox = styled.div`
  &:last-of-type {
    margin-top: 40px;
  }
`;
export const SectionTitle = styled.h3`
  font-weight: 600;
`;
export const SectionFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const SectionUserWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const SectionUserIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #eaecf0;
`;
export const SectionUserBox = styled.div`
  margin-left: 12px;
`;
export const SectionUserName = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
`;
export const SectionUserEmail = styled.span`
  display: block;
  color: #888;
  margin-top: 16px;
`;
export const MessageBtn = styled.button`
  color: #fff;
  background: #88b04b;
  border: none;
  border-radius: 6px;
  padding: 12px 18px;
  font-weight: 600;
  cursor: pointer;
`;
export const SectionContents = styled.p`
  margin-top: 20px;
  line-height: 24px;
  color: #333;
`;
export const SectionWrapWhite = styled.div`
  padding: 0 32px;
  margin-bottom: 40px;
`;
export const SectionContent = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
  color: #333;
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #88b04b;
`;
export const NoticeWrap = styled.div`
  margin-top: 24px;
`;
export const NoticeText = styled.p`
  font-size: 14px;
  color: #333;
  &:last-of-type {
    margin-top: 16px;
  }
`;
export const FinishBtn = styled.button`
  color: #fff;
  background: #88b04b;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 0;
  border-radius: 6px;
  border: none;
  width: 100%;
  cursor: pointer;
`;
export const TradeWrap = styled.div`
  display: flex;
  margin-top: 50px;
  position: relative;
`;
export const TradeBox = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d4d4d8;
  width: 100%;
  &:last-of-type {
    margin-left: 20px;
  }
  ${mq[3]} {
    padding: 40px;
  }
`;
export const TradeTitle = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 600;
`;
export const TradeUserIcon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 30px;

  ${mq[3]} {
    width: 100px;
    height: 100px;
  }
`;
export const TradeUserName = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
`;
export const TradeUserEmail = styled.p`
  color: #888;
  margin-top: 14px;
`;
export const TradeIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${mq[3]} {
    width: 100px;
  }
`;
