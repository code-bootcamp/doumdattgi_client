import * as S from "./progress.styles";
import { useEffect, useState } from "react";
import ProgressBuyerAll from "./all/index";
import ProgressBuyerDone from "./done/index";
import ProgressBuyerProgressing from "./progress/index";
import ProgressBuyerWaiting from "./waiting/index";
import ProgressBuyerRefuse from "./refuse/index";
import { useRouter } from "next/router";

export default function ProgressBuyer(): JSX.Element {
  const [isList, setIsList] = useState(0);
  const router = useRouter();

  const obj = {
    0: "all",
    1: "done",
    2: "progress",
    3: "refuse",
    4: "waiting"
  };

  const onClickList = (index: number) => {
    const state = obj[String(index)];
    router.push({
      pathname: `/mypage/progressBuyer`,
      query: { state }
    });
    setIsList(index);
    localStorage.setItem("selectedTab", index.toString());
  };

  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      setIsList(parseInt(storedTab));
    }
  }, []);

  const renderPage = () => {
    if (isList === 0) {
      return <ProgressBuyerAll />;
    } else if (isList === 1) {
      return <ProgressBuyerWaiting />;
    } else if (isList === 2) {
      return <ProgressBuyerProgressing />;
    } else if (isList === 3) {
      return <ProgressBuyerDone />;
    } else if (isList === 4) {
      return <ProgressBuyerRefuse />;
    }
  };

  return (
    <S.Wrapper>
      <S.PageTitle>신청 진행 내역</S.PageTitle>
      <S.TabBox>
        <S.PageTab onClick={() => onClickList(0)}>전체</S.PageTab>
        <S.PageTab onClick={() => onClickList(1)}>대기중</S.PageTab>
        <S.PageTab onClick={() => onClickList(2)}>진행중</S.PageTab>
        <S.PageTab onClick={() => onClickList(3)}>종료</S.PageTab>
        <S.PageTab onClick={() => onClickList(4)}>거절</S.PageTab>
      </S.TabBox>
      {renderPage()}
    </S.Wrapper>
  );
}
