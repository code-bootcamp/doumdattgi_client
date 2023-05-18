import { useState } from "react";
import { ModalCancelState } from "../../../../../../commons/stores";
import { useRecoilState } from "recoil";
import axios from "axios";

interface IResponseProps {
  success: boolean;
  imp_uid: string;
  paid_amount: number;
}

declare const window: typeof globalThis & {
  IMP: any;
};

interface IUsePayment {
  clickIniCis: (amount: number, isSelect: string) => () => void;
  isSelect: string;
  SelectOption: (e: any) => void;
}

export default function UsePayment(): IUsePayment {
  const [isSelect, setIsSelect] = useState("");
  const [, setIsCancel] = useRecoilState(ModalCancelState);

  //

  const SelectOption = (e: any) => {
    console.log(e.target);
    setIsSelect(e.target.value);
  };

  // 이니시스 결제

  const clickIniCis = (amount: number, isSelect: string) => (): void => {
    console.log(amount);
    console.log(isSelect);

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp70556024"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: String(isSelect),
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 주문번호 겹치면 에러남(주석하면 랜덤으로 생성됨)
        name: "포인트 충전",
        amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181"
      },
      function <T extends IResponseProps>(rsp: T) {
        console.log(rsp);
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          axios.post(
            "http://localhost:3000/graphql",
            {
              query: `
          mutation {
            createPointTransaction(impUid: "${rsp.imp_uid}", amount: ${rsp.paid_amount}){
              id
              impUid
              amount
              status
            }
          }
        `
            },
            {
              headers: {
                Authorization: "Bearer login 후, 발급 받은 accessToken "
              }
            }
          );
          alert("결제에 성공했습니다!!");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다!!");
          setIsCancel(false);
        }
      }
    );
  };

  return { SelectOption, isSelect, clickIniCis };
}
