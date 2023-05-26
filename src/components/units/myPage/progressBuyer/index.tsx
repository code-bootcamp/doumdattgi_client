import * as S from "./progress.styles";
import { useEffect, useState } from "react";
import ProgressBuyerAll from "./all/index";
import ProgressBuyerDone from "./done/index";
import ProgressBuyerProgressing from "./progress/index";
import ProgressBuyerWaiting from "./waiting/index";
import ProgressBuyerRefuse from "./refuse/index";
import { useRouter } from "next/router";

type ObjType = {
  [key: string]: string;
};

export default function ProgressBuyer(): JSX.Element {
  const [isList, setIsList] = useState("");
  const router = useRouter();

  const obj: ObjType = {
    all: "all",
    waiting: "done",
    progressing: "progress",
    done: "refuse",
    refuse: "waiting"
  };

  const onClickList = (index: string) => {
    const state = obj[index];
    router.push({
      pathname: `/mypage/progressBuyer`,
      query: { state }
    });
    setIsList(index);
    localStorage.setItem("selectedTab", index);
  };

  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      setIsList(storedTab);
    }
  }, []);

  const renderPage = () => {
    if (isList === "all") {
      return <ProgressBuyerAll />;
    } else if (isList === "waiting") {
      return <ProgressBuyerWaiting />;
    } else if (isList === "progressing") {
      return <ProgressBuyerProgressing />;
    } else if (isList === "done") {
      return <ProgressBuyerDone />;
    } else if (isList === "refuse") {
      return <ProgressBuyerRefuse />;
    }
  };

  return (
    <S.Wrapper>
      <S.PageTitle>신청 진행 내역</S.PageTitle>
      <S.TabBox>
        <S.PageTab onClick={() => onClickList("all")}>전체</S.PageTab>
        <S.PageTab onClick={() => onClickList("waiting")}>대기중</S.PageTab>
        <S.PageTab onClick={() => onClickList("progressing")}>진행중</S.PageTab>
        <S.PageTab onClick={() => onClickList("done")}>종료</S.PageTab>
        <S.PageTab onClick={() => onClickList("refuse")}>거절</S.PageTab>
      </S.TabBox>
      {renderPage()}
    </S.Wrapper>
  );
}
