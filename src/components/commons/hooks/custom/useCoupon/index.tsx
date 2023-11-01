import { MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { PURCHASE_COUPON } from "../../mutations/useMutationPurchaseCoupon";
import { useQueryFetchLoginUser } from "../../queries/useQueryFetchLoginUser";
import { useRouter } from "next/router";

export const useCoupon = () => {
  const { data } = useQueryFetchLoginUser();
  const router = useRouter();

  const mileagePoint = data?.fetchLoginUser.user_mileage;

  const [Board, setBoard] = useState("게시글을 선택해주세요");

  const [selectBoardId, setSelectBoardId] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState("");

  const [isCouponSelected, setIsCouponSelected] = useState(false);
  const [isBoardSelected, setIsBoardSelected] = useState(false);

  const [purchaseCoupon] = useMutation(PURCHASE_COUPON);

  // 쿠폰을 적용할 게시글 선택
  const onClickBoard = (e: MouseEvent<HTMLElement>) => {
    setSelectBoardId(e.currentTarget.id);
    const Title = e.currentTarget?.textContent;
    setBoard(Title ?? "게시글을 선택해주세요");
    setIsBoardSelected(Title ? true : false);
  };
  // 어떤 쿠폰 쓸건지 선택
  const onClickCoupon = (price: string, point: number) => {
    const priceData = `${price}&${point}`;

    setIsCouponSelected(true);
    setSelectedCoupon(priceData);
  };

  // 쿠폰 적용 후 api 요청
  const onClickSubmit = () => {
    if (selectedCoupon && selectBoardId) {
      if (Number(mileagePoint) < Number(selectedCoupon.split("&")[1])) {
        alert("보유 마일리지가 부족합니다");
        return;
      }
      try {
        const result = purchaseCoupon({
          variables: {
            coupon: selectedCoupon.split("&")[0],
            productId: selectBoardId
          }
        });
        alert("쿠폰이 정상적으로 적용되었습니다.");
        router.reload();
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    } else {
      alert("사용할 쿠폰과 적용할 게시물을 선택해주세요");
    }
  };

  return {
    onClickBoard,
    Board,
    onClickCoupon,
    onClickSubmit,
    selectBoardId,
    selectedCoupon,
    isBoardSelected,
    isCouponSelected
  };
};
