import { useState } from "react";
import { useMutation } from "@apollo/client";
import { PURCHASE_COUPON } from "../../mutations/useMutationPurchaseCoupon";

export const useCoupon = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState("");

  const [purchaseCoupon] = useMutation(PURCHASE_COUPON);

  // 쿠폰을 적용할 게시글 선택
  const onClickTitle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  // 어떤 쿠폰 쓸건지 선택
  const onClickCoupon = (price: string) => {
    setSelectedCoupon(price);
  };

  // 쿠폰 적용 후 api 요청
  const onClickSubmit = () => {
    if (selectedCoupon && selectedOption) {
      try {
        const result = purchaseCoupon({
          variables: {
            coupon: selectedCoupon,
            productId: selectedOption
          }
        });
        console.log(result);
        alert("쿠폰이 정상적으로 적용되었습니다.");
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    } else {
      alert("쿠폰 혹은 게시물을 선택해주세요");
    }
  };

  return {
    onClickTitle,
    onClickCoupon,
    onClickSubmit,
    selectedOption,
    selectedCoupon
  };
};
