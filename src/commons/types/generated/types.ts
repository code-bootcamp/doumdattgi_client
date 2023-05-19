export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type ICreateProductInput = {
  category: Scalars["String"];
  main_text: Scalars["String"];
  sellOrBuy: Scalars["Boolean"];
  sub_category: Scalars["String"];
  summary: Scalars["String"];
  title: Scalars["String"];
};

export type ICreateUserInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  nickname: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
};

export type IMutation = {
  __typename?: "Mutation";
  cancelPointTransaction: IPointTransaction;
  checkValidToken: Scalars["Boolean"];
  createPointTransaction: IPointTransaction;
  createProduct: IProduct;
  createUser: IUser;
  deleteUser: Scalars["Boolean"];
  login: Scalars["String"];
  logout: Scalars["String"];
  restoreAccessToken: Scalars["String"];
  sendTokenEmail: Scalars["String"];
  updateNicknameIntroduce: IUser;
  updateProduct: Scalars["Boolean"];
  updateProfileImage: IUser;
  updateUserInfo: IUser;
  uploadFile: Array<Scalars["String"]>;
};

export type IMutationCancelPointTransactionArgs = {
  impUid: Scalars["String"];
  paymentType: Scalars["String"];
};

export type IMutationCheckValidTokenArgs = {
  email: Scalars["String"];
  token: Scalars["String"];
};

export type IMutationCreatePointTransactionArgs = {
  amount: Scalars["Int"];
  impUid: Scalars["String"];
  paymentType: Scalars["String"];
};

export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationSendTokenEmailArgs = {
  email: Scalars["String"];
};

export type IMutationUpdateNicknameIntroduceArgs = {
  updateNicknameIntroduceInput: IUpdateNicknameIntroduceInput;
};

export type IMutationUpdateProductArgs = {
  productId: Scalars["String"];
  updateProductInput: IUpdateProductInput;
};

export type IMutationUpdateProfileImageArgs = {
  url: Scalars["String"];
};

export type IMutationUpdateUserInfoArgs = {
  updateUserInfoInput: IUpdateUserInfoInput;
};

export type IMutationUploadFileArgs = {
  files: Array<Scalars["Upload"]>;
};

export enum IPoint_Transaction_Status_Enum {
  Cancel = "CANCEL",
  Payment = "PAYMENT"
}

export enum IProduct_Category_Enum {
  Design = "DESIGN",
  Document = "DOCUMENT",
  It = "IT",
  Marketing = "MARKETING",
  Translate = "TRANSLATE",
  Video = "VIDEO"
}

export type IPointTransaction = {
  __typename?: "PointTransaction";
  amount: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  impUid: Scalars["String"];
  paymentType: Scalars["String"];
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export type IProduct = {
  __typename?: "Product";
  category: IProduct_Category_Enum;
  id: Scalars["String"];
  main_text: Scalars["String"];
  sellOrBuy: Scalars["Boolean"];
  sub_category: Scalars["String"];
  summary: Scalars["String"];
  title: Scalars["String"];
  user: IUser;
};

export type IQuery = {
  __typename?: "Query";
  fetchLoginUser: IUser;
  fetchPointTransactions: Array<IPointTransaction>;
  fetchUserPaymentInfo: Array<IPointTransaction>;
};

export type IQueryFetchPointTransactionsArgs = {
  impUid: Scalars["String"];
};

export type IRequest = {
  __typename?: "Request";
  completedAt: Scalars["DateTime"];
  content: Scalars["String"];
  createAt: Scalars["DateTime"];
  id: Scalars["String"];
  isAccept: Scalars["Boolean"];
  price: Scalars["Int"];
  product: IProduct;
  req_title: Scalars["String"];
  sentAt: Scalars["DateTime"];
  user: IUser;
};

export type IUpdateNicknameIntroduceInput = {
  introduce?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
};

export type IUpdateProductInput = {
  category?: InputMaybe<Scalars["String"]>;
  main_text?: InputMaybe<Scalars["String"]>;
  sellOrBuy?: InputMaybe<Scalars["Boolean"]>;
  sub_category?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateUserInfoInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  portfolio?: InputMaybe<Scalars["String"]>;
};

export type IUser = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["String"];
  introduce: Scalars["String"];
  name: Scalars["String"];
  nickname: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
  point: Scalars["Int"];
  portfolio: Scalars["String"];
  profileImage: Scalars["String"];
  workRate: Scalars["Int"];
};
