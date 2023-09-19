import * as S from "../styles";
import { useCoupon } from "../../../../commons/hooks/custom/useCoupon/index";
import { useQueryFetchMyNotCouponProduct } from "../../../../commons/hooks/queries/useQueryfetchMyNotCouponProduct";
import { Dropdown, Space, MenuProps } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { MouseEvent, useState } from "react";

export default function MileageUse(): JSX.Element {
  const { data } = useQueryFetchMyNotCouponProduct();
  const { onClickBoard, Board, onClickCoupon, onClickSubmit, selectedCoupon } =
    useCoupon();

  // 현재 마일리지 적용 가능 게시글 목록
  const useMileageBoard = data?.fetchMyNotCouponProduct ?? [];

  const MileageBoardList = useMileageBoard.flatMap(el => [
    {
      label: (
        <div id={el.product_id} onClick={onClickBoard}>
          {el.product_title}
        </div>
      )
    },
    { type: "divider" }
  ]);

  // 이후 제일 마지막 밑줄은 삭제
  MileageBoardList.pop();

  const items: MenuProps["items"] = MileageBoardList as ItemType[];

  const selectMileage = [
    { select: "ONE_DAY", day: "1일권", price: "5,000 Ⓜ", num: 5000 },
    { select: "THREE_DAYS", day: "3일권", price: "10,000 Ⓜ", num: 10000 },
    { select: "SEVEN_DAYS", day: "7일권", price: "20,000 Ⓜ", num: 20000 }
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
      {/* <S.List value={selectedOption} onChange={onClickTitle}>
        <S.ListOption>게시글을 선택해주세요</S.ListOption>
        {data?.fetchMyNotCouponProduct?.map(el => (
          <S.ListOption key={el.product_id} value={el.product_id}>
            {el.product_title}
          </S.ListOption>
        ))}
      </S.List> */}

      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="bottomLeft"
        overlayClassName={"board"}
      >
        <Space className="selectBoard">
          <S.BoardList>{Board}</S.BoardList>
        </Space>
      </Dropdown>
      <S.CouponWrapper>
        {selectMileage.map(el => (
          <S.Coupon
            el={el}
            selectedCoupon={selectedCoupon}
            key={el.select}
            onClick={() => onClickCoupon(el.select, el.num)}
          >
            <S.CouponImage />
            <S.CouponDetailWrapper>
              <S.CouponDetail>{el.day}</S.CouponDetail>
              <S.CouponDetail>{el.price}</S.CouponDetail>
            </S.CouponDetailWrapper>
          </S.Coupon>
        ))}
      </S.CouponWrapper>
      <S.BtnBox>
        <S.PurchaseBtn onClick={onClickSubmit}>구매하기</S.PurchaseBtn>
      </S.BtnBox>
    </>
  );
}
