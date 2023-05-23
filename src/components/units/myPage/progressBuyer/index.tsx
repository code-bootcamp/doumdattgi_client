import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchBuyerRequest } from "../../../commons/hooks/queries/useQueryFetchBuyerRequest";
import * as S from "./progress.styles";

export default function ProgressBuyer(): JSX.Element {
  const { data } = useQueryFetchBuyerRequest();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.PageTitle>신청 진행 내역</S.PageTitle>
      <S.TabBox>
        <S.PageTab>전체</S.PageTab>
        <S.PageTab>대기중</S.PageTab>
        <S.PageTab>진행중</S.PageTab>
        <S.PageTab>종료</S.PageTab>
      </S.TabBox>
      {data?.fetchBuyerRequest.map((el: any) => (
        <S.List
          key={el.request_id}
          onClick={onClickMoveToPage(`/${el.request_id}/workAgreement`)}
        >
          <S.ListLeft>
            {el.request_isAccept === "WAITING" ? (
              <S.ListStatusWaiting>대기중</S.ListStatusWaiting>
            ) : (
              <></>
            )}
            {el.request_isAccept === "ACCEPTED" ? (
              <S.ListStatusAccept>진행중</S.ListStatusAccept>
            ) : (
              <></>
            )}
            {el.request_isAccept === "REFUSE" ? (
              <S.ListStatusRefuse>거절됨</S.ListStatusRefuse>
            ) : (
              <></>
            )}
            {el.request_isAccept !== "WAITING" &&
            el.request_isAccept !== "ACCEPTED" &&
            el.request_isAccept !== "REFUSE" ? (
              <S.ListStatusFinish>종료</S.ListStatusFinish>
            ) : (
              <></>
            )}
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
