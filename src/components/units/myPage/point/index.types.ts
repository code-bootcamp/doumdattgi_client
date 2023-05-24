import { IFetchPaymentOutput } from "../../../../commons/types/generated/types";

export interface IValueArgs {
  payment_payment_impUid: string;
  payment_payment_type: string;
  payment_payment_createdAt: string;
  payment_payment_amount: number;
}

export interface IPropsfetchUserPaymentInfo {
  clickRefund: (value: IValueArgs) => () => void;
  dataArr: IFetchPaymentOutput[];
  el: {
    payment_payment_impUid: string;
    payment_payment_type: string;
    payment_payment_createdAt: string;
    payment_payment_amount: number;
  };
}
