import { IPointTransaction } from "../../../../commons/types/generated/types";

export interface IValueArgs {
  impUid: string;
  paymentType: string;
  createdAt: string;
  amount: number;
}

export interface IValueArgs {
  impUid: string;
  paymentType: string;
  createdAt: string;
  amount: number;
}

export interface IPropsfetchUserPaymentInfo {
  clickRefund: (value: IValueArgs) => void;
  dataArr: IPointTransaction[];
  el: {
    impUid: string;
    paymentType: string;
    createdAt: string;
    amount: number;
  };
}
