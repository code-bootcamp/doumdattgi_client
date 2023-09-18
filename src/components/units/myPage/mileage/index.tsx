import MileageHistory from "./history";
import * as S from "./styles";
import MileageUse from "./use";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MileageList from "./list/index";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";

export default function Mileage(): JSX.Element {
  const [isList, setIsList] = useState("use");
  const [isStatus, setIsStatue] = useState(false);
  const router = useRouter();

  const { data } = useQueryFetchLoginUser();

  const onClickList = (select: string) => {
    setIsList(select);
    // refetch();
    localStorage.setItem("selectedTab", select.toString());
    setIsStatue(true);
  };

  useEffect(() => {
    setIsList("use");
    // refetch();
  }, []);

  const renderPage = () => {
    if (isList === "use") {
      return <MileageUse />;
    } else if (isList === "history") {
      return <MileageHistory />;
    } else if (isList === "list") {
      return <MileageList />;
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.MainTitle>마일리지</S.MainTitle>
        <S.TabBox>
          <S.Tab isStatus={isList === "use"} onClick={() => onClickList("use")}>
            사용
          </S.Tab>
          <S.Tab
            isStatus={isList === "history"}
            onClick={() => onClickList("history")}
          >
            내역
          </S.Tab>
          <S.Tab
            isStatus={isList === "list"}
            onClick={() => onClickList("list")}
          >
            목록
          </S.Tab>
        </S.TabBox>
        <S.CurrentMileage>
          보유 마일리지
          <S.MileagePoint>
            {data?.fetchLoginUser?.user_mileage.toLocaleString()} Ⓜ
          </S.MileagePoint>
        </S.CurrentMileage>
        {renderPage()}
      </S.Container>
    </S.Wrapper>
  );
}
