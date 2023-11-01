import * as S from "../styles";
import Tag from "../../../../commons/tag/category";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { fallback } from "../../../../../commons/libraries/fallback";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import { useQueryFetchMileageProductHistory } from "../../../../commons/hooks/queries/useQueryfetchMileageProductHistory";
import { Fragment, useEffect, useState } from "react";
import { getDateTime2 } from "../../../../../commons/libraries/getDate";
import { getCouponType } from "../../../../../commons/libraries/getCouponType";

export default function MileageList(): JSX.Element {
  const { data } = useQueryFetchMileageProductHistory();
  const { onClickMoveToPage } = useMoveToPage();

  // 현재 시간
  const nowDate = Math.floor(new Date().getTime() / 1000);

  const [currentTime, setCurrentTime] = useState(nowDate);

  // 마일리지 구매 시간
  const mileageCreateAt = data?.fetchMileageProductHistory.map(el => {
    return {
      createTime: el.mileage?.mileage_createdAt,
      coupon: el.mileage?.mileage_coupon,
      productId: el.product_id
    };
  });

  const created = mileageCreateAt?.map(
    el => (el.createTime = new Date(el.createTime)?.getTime())
  ) ?? [99999999999999999];

  const mileageInfo = mileageCreateAt?.map(el => {
    const mileageExpire = (sec: number) => {
      if (el.coupon === "ONE_DAY") {
        return sec + 86400;
      }
      if (el.coupon === "THREE_DAYS") {
        return sec + 259200;
      }
      if (el.coupon === "SEVEN_DAYS") {
        return sec + 604800;
      }
    };
    const createTime = new Date(el.createTime);
    const transToSec = Math.floor(createTime.getTime() / 1000);
    const expireTime = mileageExpire(transToSec) ?? 0;

    const remainTime = Math.floor(expireTime - nowDate);
    const timeResult = remainTime;

    return { Id: el.productId, Coupon: el.coupon, time: timeResult };
  });

  // 초 단위 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Math.floor(new Date().getTime() / 1000));
    }, 1000);

    // 기한 남아있는 마일리지 적용 게시글이 하나도 없을 시 타이머 종료
    if (created.filter(el => el - currentTime > 0).length === 0)
      clearInterval(timer);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {data?.fetchMileageProductHistory === undefined ? (
        <S.ListNone>서비스 이용권을 사용한 게시물이 없습니다</S.ListNone>
      ) : (
        <>
          {data?.fetchMileageProductHistory.map(el => {
            return (
              <Fragment key={el.product_id}>
                {mileageInfo?.map(
                  aa =>
                    aa.time > 0 &&
                    aa.Id === el.product_id && (
                      <S.RightListBox
                        key={aa.Id}
                        onClick={onClickMoveToPage(`/${el.product_id}`)}
                      >
                        <S.ListImageBox>
                          <>
                            <S.MileageDay>
                              <S.Day>
                                {mileageInfo
                                  ?.filter(a => a.Id === el.product_id)
                                  .map(el => getCouponType(el.Coupon ?? ""))}
                              </S.Day>
                              <S.Time>
                                {mileageInfo
                                  ?.filter(a => a.Id === el.product_id)
                                  .map(el => getDateTime2(el.time))}
                              </S.Time>
                            </S.MileageDay>
                            <S.ListImage
                              onError={e => {
                                const target = e.target as HTMLImageElement;
                                target.src = fallback;
                              }}
                              src={
                                el.images === undefined || el.images === null
                                  ? ""
                                  : el.images[0]?.image_url
                              }
                            />
                          </>
                        </S.ListImageBox>
                        <S.RightDetailBox>
                          <S.DetailContents>
                            <S.ListCategory>
                              {CategoryObj[el.product_category]}
                            </S.ListCategory>
                            <S.ListTitle>{el.product_title}</S.ListTitle>
                            <Tag data={el.product_workDay} />
                            <S.DivideLine />
                            <S.Remarks>{el.product_summary}</S.Remarks>
                          </S.DetailContents>
                        </S.RightDetailBox>
                      </S.RightListBox>
                    )
                )}
              </Fragment>
            );
          })}
        </>
      )}
    </>
  );
}
