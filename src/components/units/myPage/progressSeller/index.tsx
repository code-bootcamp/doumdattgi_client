import { useQueryFetchSellerWork } from "../../../commons/hooks/queries/useQueryFetchSellerWork";
import * as S from "./progress.styles";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage/index";

export default function ProgressSeller(): JSX.Element {
  const { data } = useQueryFetchSellerWork();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.PageTitle>작업 진행 내역</S.PageTitle>
      <S.TabBox>
        <S.PageTab>전체</S.PageTab>
        <S.PageTab>대기중</S.PageTab>
        <S.PageTab>진행중</S.PageTab>
        <S.PageTab>종료</S.PageTab>
      </S.TabBox>
      {data?.fetchSellerWork.map((el: any) => (
        <S.List
          key={el.request_id}
          onClick={onClickMoveToPage(`/${el.request_id}/workAgreement`)}
        >
          <S.ListLeft>
            <S.ListStatus>
              {el.request_isAccept === "WAITING"
                ? "대기중"
                : el.request_isAccept === "ACCEPTED"
                ? "진행중"
                : el.request_isAccept === "REFUSE"
                ? "거절됨"
                : "종료"}
            </S.ListStatus>
            <S.ListTitle>{el.request_title}</S.ListTitle>
          </S.ListLeft>
          <S.ListRight>
            <S.ListDate>{el.request_createAt}</S.ListDate>
            <S.UserBox>
              <S.UserIcon src="/Profile.png" />
              <S.UserName>{el.seller_nickname}</S.UserName>
            </S.UserBox>
          </S.ListRight>
        </S.List>
      ))}
    </S.Wrapper>
  );
}
