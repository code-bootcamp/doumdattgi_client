import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import * as S from "../progress.styles";
import { getDateTime } from "../../../../../commons/libraries/getDate";
import { useQueryFetchSellerWork } from "../../../../commons/hooks/queries/useQueryFetchSellerWork";
import { fallback } from "../../../../../commons/libraries/fallback";

export default function ProgressSellerDone(): JSX.Element {
  const { data } = useQueryFetchSellerWork();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      {data?.fetchSellerWork.length === 0 ? (
        <S.ListNone>현재 종료된 작업이 없습니다.</S.ListNone>
      ) : (
        ""
      )}
      {data?.fetchSellerWork.map(el => (
        <div
          key={el.request_id}
          onClick={onClickMoveToPage(`/${el.request_id}/workAgreement`)}
        >
          {el.request_isAccept === "FINISH" ? (
            <S.List>
              <S.ListLeft>
                <S.ListStatusFinish>종료</S.ListStatusFinish>
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
