import { useQueryFetchBuyerRequest } from "../../../commons/hooks/queries/useQueryFetchBuyerRequest";
import * as S from "./progress.styles";

export default function Progress(): JSX.Element {
  const { data } = useQueryFetchBuyerRequest();

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
        <S.List key={el._id}>
          <S.ListLeft>
            <S.ListStatus>종료</S.ListStatus>
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
