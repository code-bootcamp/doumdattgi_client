import { getDateTime } from "../../../../../commons/libraries/getDate";
import { useQueryFetchMileageHistory } from "../../../../commons/hooks/queries/useQueryfetchMileageHistory";
import * as S from "../styles";

export default function MileageHistory(): JSX.Element {
  const { data } = useQueryFetchMileageHistory();

  return (
    <>
      {data?.fetchMileageHistory.length === 0 ? (
        <S.ListNone>현재 마일리지 전환 내역이 없습니다.</S.ListNone>
      ) : (
        <></>
      )}
      {data?.fetchMileageHistory?.map(el => (
        <div key={el.mileage_id}>
          {/* 수수료가 마일리지로 전환 되었을 때 */}
          {el.mileage_status === "INCOME" ? (
            <S.MileageList>
              <S.Header>
                <S.HeaderTitle>수수료 마일리지 전환</S.HeaderTitle>
                <S.HeaderDate>{getDateTime(el.mileage_createdAt)}</S.HeaderDate>
              </S.Header>
              <S.BodyPoint>{el.payment_amount} Ⓜ</S.BodyPoint>
            </S.MileageList>
          ) : (
            <></>
          )}
          {/* 마일리지로 쿠폰 사용하였을 때 */}
          {el.mileage_status === "EXPENSE" ? (
            <S.MileageList>
              <S.Header>
                <S.HeaderTitle>마일리지 사용</S.HeaderTitle>
                <S.HeaderDate>{getDateTime(el.mileage_createdAt)}</S.HeaderDate>
              </S.Header>
              <S.BodyPoint>{el.payment_amount} Ⓜ</S.BodyPoint>
            </S.MileageList>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
}
