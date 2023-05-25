import * as S from "./progress.styles";
import { useState } from "react";
import ProgressBuyerAll from "./all/index";
import ProgressBuyerDone from "./done/index";
import ProgressBuyerProgressing from "./progress/index";
import ProgressBuyerWaiting from "./waiting/index";
import ProgressBuyerRefuse from "./refuse/index";

export default function ProgressBuyer(): JSX.Element {
  const [isAll, setIsAll] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isProgressing, setIsProgressing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isRefuse, setIsRefuse] = useState(false);

  // 전체 리스트 표시
  const onClickAll = () => {
    setIsAll(true);
    setIsDone(false);
    setIsProgressing(false);
    setIsRefuse(false);
    setIsWaiting(false);
  };

  // 대기중 리스트 표시
  const onClickWaiting = () => {
    setIsAll(false);
    setIsDone(false);
    setIsProgressing(false);
    setIsRefuse(false);
    setIsWaiting(true);
  };

  // 진행중 리스트 표시
  const onClickProgressing = () => {
    setIsAll(false);
    setIsDone(false);
    setIsProgressing(true);
    setIsRefuse(false);
    setIsWaiting(false);
  };

  // 종료 리스트 표시
  const onClickDone = () => {
    setIsAll(false);
    setIsDone(true);
    setIsProgressing(false);
    setIsRefuse(false);
    setIsWaiting(false);
  };

  // 거절 리스트 표시
  const onClickRefuse = () => {
    setIsAll(false);
    setIsDone(false);
    setIsProgressing(false);
    setIsRefuse(true);
    setIsWaiting(false);
  };

  return (
    <S.Wrapper>
      <S.PageTitle>신청 진행 내역</S.PageTitle>
      <S.TabBox>
        <S.PageTab onClick={onClickAll}>전체</S.PageTab>
        <S.PageTab onClick={onClickWaiting}>대기중</S.PageTab>
        <S.PageTab onClick={onClickProgressing}>진행중</S.PageTab>
        <S.PageTab onClick={onClickDone}>종료</S.PageTab>
        <S.PageTab onClick={onClickRefuse}>거절</S.PageTab>
      </S.TabBox>
      {isAll ? <ProgressBuyerAll /> : <></>}
      {isDone ? <ProgressBuyerDone /> : <></>}
      {isProgressing ? <ProgressBuyerProgressing /> : <></>}
      {isWaiting ? <ProgressBuyerWaiting /> : <></>}
      {isRefuse ? <ProgressBuyerRefuse /> : <></>}
    </S.Wrapper>
  );
}
