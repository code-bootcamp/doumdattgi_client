import * as S from "./progress.styles";
import { useEffect, useState } from "react";
import ProgressSellerDone from "./done/index";
import ProgressSellerProgressing from "./progress/index";
import ProgressSellerWaiting from "./waiting/index";
import ProgressSellerRefuse from "./refuse/index";
import ProgressSellerAll from "./all/index";
import { useRouter } from "next/router";

type ObjType = {
  [key: string]: string;
};

export default function ProgressSeller(): JSX.Element {
  const router = useRouter();

  const obj: ObjType = {
    all: "all",
    waiting: "done",
    progressing: "progress",
    done: "refuse",
    refuse: "waiting"
  };

  const [isList, setIsList] = useState("");

  const onClickList = (index: string) => {
    const state = obj[index];

    router.push({
      pathname: `/mypage/progressSeller`,
      query: { state }
    });

    setIsList(index);
    localStorage.setItem("selectedTab", index.toString());
  };

  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      setIsList(storedTab);
    }
  }, []);

  const renderPage = () => {
    if (isList === "all") {
      return <ProgressSellerAll />;
    } else if (isList === "waiting") {
      return <ProgressSellerWaiting />;
    } else if (isList === "progressing") {
      return <ProgressSellerProgressing />;
    } else if (isList === "done") {
      return <ProgressSellerDone />;
    } else if (isList === "refuse") {
      return <ProgressSellerRefuse />;
    }
  };

  return (
    <S.Wrapper>
      <S.PageTitle>작업 진행 내역</S.PageTitle>
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
