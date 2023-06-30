import { IPayment } from "../../../../commons/types/generated/types";

export interface IValueArgs {
  payment_impUid: string;
  payment_type: string;
  payment_createdAt: string;
  payment_amount: number;
}

export interface IPropsfetchUserPaymentInfo {
  // clickRefund: (value: IValueArgs) => () => void;
  // dataArr: IPayment[];
  // key: string;
  // el: {
  //   payment_impUid: string;
  //   payment_type: string;
  //   payment_createdAt: string;
  //   payment_amount: number;
  // };
  // payment_impUid: string;
  // payment_type: string;
  // payment_createdAt: string;
  // payment_amount: number;

  dataArr: IPayment[];
  clickRefund: (value: IValueArgs) => () => void;
  el: IPayment;
  key: string;
  allAmount: number;
  payment_impUid: string;
  payment_type: string;
  payment_createdAt: string;
  payment_amount: number;
}
