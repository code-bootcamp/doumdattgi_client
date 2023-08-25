import * as S from "../styles";
import { useCoupon } from "../../../../commons/hooks/custom/useCoupon/index";
import { useQueryFetchMyNotCouponProduct } from "../../../../commons/hooks/queries";

export default function MileageUse(): JSX.Element {
  const { data } = useQueryFetchMyNotCouponProduct();
  const { onClickTitle, onClickCoupon, onClickSubmit, selectedOption } =
    useCoupon();

  return (
    <>
      <S.SubTitle>특별한 서비스 이용권</S.SubTitle>
      <S.Contents>
        도움닫기 홈페이지 카테고리 리스트의 전용 노출란에 선택한 내 서비스가
        무작위로 게시됩니다.
      </S.Contents>
      <S.Contents>
        의뢰 완료 시 차감되는 플랫폼 이용 수수료를 마일리지로 전환해드리고,
        마일리지를 통해 일정 기간의 이용권을 구매할 수 있습니다.
      </S.Contents>
      <S.Contents>
        이용권을 고매할 때, 노출하고 싶은 내 서비스를 선택할 수 있습니다.
      </S.Contents>
      <S.List value={selectedOption} onChange={onClickTitle}>
        <S.ListOption>게시글을 선택해주세요</S.ListOption>
        {data?.fetchMyNotCouponProduct?.map(el => (
          <S.ListOption key={el.product_id} value={el.product_id}>
            {el.product_title}
          </S.ListOption>
        ))}
      </S.List>
      <S.CouponWrapper>
        <S.Coupon onClick={() => onClickCoupon("ONE_DAY")}>
          <S.CouponImage />
          <S.CouponDetailWrapper>
            <S.CouponDetail>1일권 </S.CouponDetail>
            <S.CouponDetail>5,000 Ⓜ</S.CouponDetail>
          </S.CouponDetailWrapper>
        </S.Coupon>
        <S.Coupon onClick={() => onClickCoupon("THREE_DAYS")}>
          <S.CouponImage />
          <S.CouponDetailWrapper>
            <S.CouponDetail>3일권 </S.CouponDetail>
            <S.CouponDetail>10,000 Ⓜ</S.CouponDetail>
          </S.CouponDetailWrapper>
        </S.Coupon>
        <S.Coupon onClick={() => onClickCoupon("SEVEN_DAYS")}>
          <S.CouponImage />
          <S.CouponDetailWrapper>
            <S.CouponDetail>7일권 </S.CouponDetail>
            <S.CouponDetail>20,000 Ⓜ</S.CouponDetail>
          </S.CouponDetailWrapper>
        </S.Coupon>
      </S.CouponWrapper>
      <S.BtnBox>
        <S.PurchaseBtn onClick={onClickSubmit}>구매하기</S.PurchaseBtn>
      </S.BtnBox>
    </>
  );
}
