import * as S from "./progress.styles";
import { useEffect, useState } from "react";
import ProgressBuyerAll from "./all/index";
import ProgressBuyerDone from "./done/index";
import ProgressBuyerProgressing from "./progress/index";
import ProgressBuyerWaiting from "./waiting/index";
import ProgressBuyerRefuse from "./refuse/index";
import { useRouter } from "next/router";
import { useQueryFetchBuyerRequest } from "../../../commons/hooks/queries/useQueryFetchBuyerRequest";

export default function ProgressBuyer(): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQueryFetchBuyerRequest();
  const [isList, setIsList] = useState("");

  const onClickList = (select: string) => {
    setIsList(select);
    refetch();
    localStorage.setItem("selectedTab", select.toString());
  };

  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      setIsList(storedTab);
    }
    refetch();
  }, [router.asPath]);

  const renderPage = () => {
    if (isList === "") {
      return <ProgressBuyerAll />;
    }

    if (isList === "all") {
      return <ProgressBuyerAll />;
    } else if (isList === "waiting") {
      return <ProgressBuyerWaiting />;
    } else if (isList === "progress") {
      return <ProgressBuyerProgressing />;
    } else if (isList === "done") {
      return <ProgressBuyerDone />;
    } else if (isList === "refuse") {
      return <ProgressBuyerRefuse />;
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.PageTitle>신청 진행 내역</S.PageTitle>
        <S.TabBox>
          <S.PageTab onClick={() => onClickList("all")}>전체</S.PageTab>
          <S.PageTab onClick={() => onClickList("waiting")}>대기중</S.PageTab>
          <S.PageTab onClick={() => onClickList("progress")}>진행중</S.PageTab>
          <S.PageTab onClick={() => onClickList("done")}>종료</S.PageTab>
          <S.PageTab onClick={() => onClickList("refuse")}>거절</S.PageTab>
        </S.TabBox>
        {renderPage()}
      </S.Container>
    </S.Wrapper>
  );
}
