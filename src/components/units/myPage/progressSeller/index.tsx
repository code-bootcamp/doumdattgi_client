import * as S from "./progress.styles";
import { useEffect, useState } from "react";
import ProgressSellerDone from "./done/index";
import ProgressSellerProgressing from "./progress/index";
import ProgressSellerWaiting from "./waiting/index";
import ProgressSellerRefuse from "./refuse/index";
import ProgressSellerAll from "./all/index";
import { useQueryFetchSellerWork } from "../../../commons/hooks/queries/useQueryFetchSellerWork";
import { useRouter } from "next/router";

export default function ProgressSeller(): JSX.Element {
  const [isList, setIsList] = useState("");
  const router = useRouter();
  const { data, refetch } = useQueryFetchSellerWork();
  const [isStatus, setIsStatus] = useState(false);

  const onClickList = (selected: string) => {
    setIsList(selected);

    refetch();

    localStorage.setItem("selectedTab", selected.toString());
  };

  useEffect(() => {
    setIsList("all");
    refetch();
  }, [router.asPath]);

  const renderPage = () => {
    if (isList === "all") {
      return <ProgressSellerAll />;
    } else if (isList === "waiting") {
      return <ProgressSellerWaiting />;
    } else if (isList === "progress") {
      return <ProgressSellerProgressing />;
    } else if (isList === "done") {
      return <ProgressSellerDone />;
    } else if (isList === "refuse") {
      return <ProgressSellerRefuse />;
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.PageTitle>작업 진행 내역</S.PageTitle>
        <S.TabBox>
          <S.PageTab
            isStatus={isList === "all"}
            onClick={() => onClickList("all")}
          >
            전체
          </S.PageTab>
          <S.PageTab
            isStatus={isList === "waiting"}
            onClick={() => onClickList("waiting")}
          >
            대기중
          </S.PageTab>
          <S.PageTab
            isStatus={isList === "progress"}
            onClick={() => onClickList("progress")}
          >
            진행중
          </S.PageTab>
          <S.PageTab
            isStatus={isList === "done"}
            onClick={() => onClickList("done")}
          >
            종료
          </S.PageTab>
          <S.PageTab
            isStatus={isList === "refuse"}
            onClick={() => onClickList("refuse")}
          >
            거절
          </S.PageTab>
        </S.TabBox>
        {renderPage()}
      </S.Container>
    </S.Wrapper>
  );
}
