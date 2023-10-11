import { fallback } from "../../../../../commons/libraries/fallback";
import { getDateTime } from "../../../../../commons/libraries/getDate";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchSellerWork } from "../../../../commons/hooks/queries/useQueryFetchSellerWork";
import * as S from "../progress.styles";

export default function ProgressSellerProgressing(): JSX.Element {
  const { data } = useQueryFetchSellerWork();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      {data?.fetchSellerWork.filter(item => item.request_isAccept === "ACCEPT")
        .length === 0 ? (
        <S.ListNone>현재 진행중인 작업이 없습니다.</S.ListNone>
      ) : (
        ""
      )}
      {data?.fetchSellerWork.map(el => (
        <div
          key={el.request_id}
          onClick={onClickMoveToPage(`/${el.request_id}/workAgreement`)}
        >
          {el.request_isAccept === "ACCEPT" ? (
            <S.List>
              <S.ListLeft>
                <S.ListStatusAccept>진행중</S.ListStatusAccept>
                <S.ListTitle>{el.request_title}</S.ListTitle>
              </S.ListLeft>
              <S.ListRight>
                <S.ListDate>{getDateTime(el.request_createAt)}</S.ListDate>
                <S.UserBox>
                  <S.UserIcon
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallback;
                    }}
                    src={el.buyer_profileImage}
                  />
                  <S.UserName>{el.buyer_nickname}</S.UserName>
                </S.UserBox>
              </S.ListRight>
            </S.List>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
}
