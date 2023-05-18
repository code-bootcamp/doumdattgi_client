import { ChangeEvent, useState } from "react";
import { ModalCancelState } from "../../../../../../commons/stores";
import { useRecoilState } from "recoil";
import { useMutationcreatePointTransaction } from "../../../mutations/useMutationCreatePointTransaction";

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
  SelectOption: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function UsePayment(): IUsePayment {
  const [isSelect, setIsSelect] = useState("");
  const [, setIsCancel] = useRecoilState(ModalCancelState);

  const [createPointTransaction] = useMutationcreatePointTransaction();

  //

  const SelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setIsSelect(e.target.value);
  };

  // 이니시스 결제

  // const clickIniCis = (amount: number, isSelect: string) => async(): void => {
  //   console.log(amount);
  //   console.log(isSelect);

  //   const IMP = window.IMP; // 생략 가능
  //   IMP.init("imp70556024"); // Example: imp00000000

  //   IMP.request_pay(
  //     {
  //       // param
  //       pg: String(isSelect),
  //       pay_method: "card",
  //       // merchant_uid: "ORD20180131-0000011", // 주문번호 겹치면 에러남(주석하면 랜덤으로 생성됨)
  //       name: "포인트 충전",
  //       amount,
  //       buyer_email: "gildong@gmail.com",
  //       buyer_name: "홍길동",
  //       buyer_tel: "010-4242-4242",
  //       buyer_addr: "서울특별시 강남구 신사동",
  //       buyer_postcode: "01181"
  //     },
  //     function <T extends IResponseProps>(rsp: T) {
  //       console.log(rsp);
  //       // callback
  //       if (rsp.success) {
  //         // 결제 성공 시 로직,

  //         alert("결제에 성공했습니다!!");
  //         setIsCancel(false);
  //         await createPointTransaction({ variables: { impUid: rsp.imp_uid } });
  //       } else {
  //         // 결제 실패 시 로직,
  //         alert("결제에 실패했습니다!!");
  //         setIsCancel(false);
  //       }
  //     }
  //   );
  // };
  const clickIniCis =
    (amount: number, isSelect: string) => async (): Promise<void> => {
      console.log(amount);
      console.log(isSelect);

      const IMP = window.IMP; // can be omitted
      IMP.init("imp70556024"); // Example: imp00000000

      try {
        const rsp: IResponseProps = await new Promise(resolve => {
          IMP.request_pay(
            {
              // param
              pg: String(isSelect),
              pay_method: "card",
              // merchant_uid: "ORD20180131-0000011", // Error if order number overlaps (randomly generated if commented)
              name: "포인트 충전",
              amount,
              buyer_email: "gildong@gmail.com",
              buyer_name: "Hong Gil-dong",
              buyer_tel: "010-4242-4242",
              buyer_addr: "Sinsa-dong, Gangnam-gu, Seoul",
              buyer_postcode: "01181"
            },
            (rsp: IResponseProps) => {
              resolve(rsp);
            }
          );
        });

        if (rsp.success) {
          // 결제 성공
          console.log(rsp);

          alert("결제 성공!");
          setIsCancel(false);
          const result = await createPointTransaction({
            variables: {
              impUid: rsp.imp_uid,
              amount: amount,
              paymetType: String(isSelect)
            }
          });
          console.log(result);
        } else {
          // 결제 실패
          alert("결제 실패");
          setIsCancel(false);
        }
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  return { SelectOption, isSelect, clickIniCis };
}
