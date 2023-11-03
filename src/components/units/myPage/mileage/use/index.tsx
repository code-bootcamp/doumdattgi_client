import * as S from "../styles";
import { useCoupon } from "../../../../commons/hooks/custom/useCoupon/index";
import { useQueryFetchMyNotCouponProduct } from "../../../../commons/hooks/queries/useQueryfetchMyNotCouponProduct";
import { Dropdown, Space, MenuProps } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { category } from "../../../../../commons/libraries/category";

export default function MileageUse(): JSX.Element {
  const { data } = useQueryFetchMyNotCouponProduct();
  const {
    onClickBoard,
    Board,
    onClickCoupon,
    onClickSubmit,
    selectedCoupon,
    isBoardSelected,
    isCouponSelected
  } = useCoupon();

  // 현재 마일리지 적용 가능 게시글 목록
  const useMileageBoard = data?.fetchMyNotCouponProduct ?? [];

  const MileageBoardList = category.map(item => ({
    type: "group",
    label: item.label,
    children: useMileageBoard
      .filter(el => el.product_category === item.value)
      .map(el => ({
        label: (
          <S.MileageItem id={el.product_id} onClick={onClickBoard}>
            {el.product_title}
          </S.MileageItem>
        )
      }))
  }));

  // 이후 제일 마지막 밑줄은 삭제
  // MileageBoardList.pop();

  const items: MenuProps["items"] = MileageBoardList as ItemType[];

  const selectMileage = [
    {
      select: "ONE_DAY",
      day: "1일권",
      price: "5,000 Ⓜ",
      num: 5000,
      img: "/ticket1.png"
    },
    {
      select: "THREE_DAYS",
      day: "3일권",
      price: "10,000 Ⓜ",
      num: 10000,
      img: "/ticket2.png"
    },
    {
      select: "SEVEN_DAYS",
      day: "7일권",
      price: "20,000 Ⓜ",
      num: 20000,
      img: "/ticket3.png"
    }
  ];

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
        이용권을 구매할 때, 노출하고 싶은 내 서비스를 선택할 수 있습니다.
      </S.Contents>
      <S.CouponWrapper>
        {selectMileage.map(el => (
          <S.Coupon
            el={el}
            selectedCoupon={selectedCoupon}
            key={el.select}
            onClick={() => onClickCoupon(el.select, el.num)}
          >
            <S.CouponImageBox>
              <S.CouponImage src={el.img} />
            </S.CouponImageBox>
            <S.CouponDetailWrapper>
              <S.CouponDay>{el.day}</S.CouponDay>
              <S.CouponPrice>{el.price}</S.CouponPrice>
            </S.CouponDetailWrapper>
          </S.Coupon>
        ))}
      </S.CouponWrapper>
      <Dropdown menu={{ items }} trigger={["click"]} overlayClassName="mileage">
        <S.BoardList>{Board}</S.BoardList>
      </Dropdown>
      <S.BtnBox>
        <S.PurchaseBtn
          onClick={onClickSubmit}
          disabled={!(isBoardSelected && isCouponSelected)}
          isBoardSelected={isBoardSelected}
          isCouponSelected={isCouponSelected}
        >
          구매하기
        </S.PurchaseBtn>
      </S.BtnBox>
    </>
  );
}
