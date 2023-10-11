import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import * as S from "../progress.styles";
import { getDateTime } from "../../../../../commons/libraries/getDate";
import { useQueryFetchBuyerRequest } from "../../../../commons/hooks/queries/useQueryFetchBuyerRequest";
import { fallback } from "../../../../../commons/libraries/fallback";

export default function ProgressBuyerRefuse(): JSX.Element {
  const { data } = useQueryFetchBuyerRequest();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      {data?.fetchBuyerRequest.filter(
        item => item.request_isAccept === "REFUSE"
      ).length === 0 ? (
        <S.ListNone>현재 거절된 의뢰 신청이 없습니다.</S.ListNone>
      ) : (
        ""
      )}
      {data?.fetchBuyerRequest.map(el => (
        <div
          key={el.request_id}
          onClick={onClickMoveToPage(`/${el.request_id}/workAgreement`)}
        >
          {el.request_isAccept === "REFUSE" ? (
            <S.ListRefuse>
              <S.ListLeft>
                <S.ListStatusRefuse>거절됨</S.ListStatusRefuse>
                <S.ListTitleRefuse>{el.request_title}</S.ListTitleRefuse>
              </S.ListLeft>
              <S.ListRight>
                <S.ListDate>{getDateTime(el.request_createAt)}</S.ListDate>
                <S.UserBox>
                  <S.UserIcon
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallback;
                    }}
                    src={el.seller_profileImage}
                  />
                  <S.UserName>{el.seller_nickname}</S.UserName>
                </S.UserBox>
              </S.ListRight>
            </S.ListRefuse>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
}
