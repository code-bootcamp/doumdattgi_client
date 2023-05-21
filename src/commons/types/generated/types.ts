export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  product_category: Scalars['String'];
  product_detailAddress: Scalars['String'];
  product_endTime: Scalars['Int'];
  product_isMain: Array<Scalars['Boolean']>;
  product_main_text: Scalars['String'];
  product_postNum: Scalars['String'];
  product_roadAddress: Scalars['String'];
  product_sellOrBuy: Scalars['Boolean'];
  product_startTime: Scalars['Int'];
  product_sub_category: Scalars['String'];
  product_summary: Scalars['String'];
  product_thumbnailImage: Array<Scalars['String']>;
  product_title: Scalars['String'];
  product_workDay: Scalars['String'];
  product_workTime: Scalars['Int'];
};

export type ICreateRequestInput = {
  product_id: Scalars['String'];
  request_content: Scalars['String'];
  request_price: Scalars['Int'];
  request_title: Scalars['String'];
};

export type ICreateUserInput = {
  user_email: Scalars['String'];
  user_name: Scalars['String'];
  user_nickname: Scalars['String'];
  user_password: Scalars['String'];
  user_phone: Scalars['String'];
};

export type IFetchProductOutput = {
  __typename?: 'FetchProductOutput';
  i_image_url: Scalars['String'];
  product_product_category: Scalars['String'];
  product_product_id: Scalars['String'];
  product_product_title: Scalars['String'];
  product_product_workDay: Scalars['String'];
  u_user_nickname: Scalars['String'];
  u_user_url: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelPayment: IPayment;
  checkValidToken: Scalars['Boolean'];
  createPayment: IPayment;
  createProduct: IProduct;
  createUser: IUser;
  deleteLoginProduct: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  sendRequest: IRequest;
  sendTokenEmail: Scalars['String'];
  updateNicknameIntroduce: IUser;
  updateProduct: Scalars['Boolean'];
  updateProfileImage: IUser;
  updateUserInfo: IUser;
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCancelPaymentArgs = {
  payment_impUid: Scalars['String'];
  payment_type: Scalars['String'];
};


export type IMutationCheckValidTokenArgs = {
  user_email: Scalars['String'];
  user_token: Scalars['String'];
};


export type IMutationCreatePaymentArgs = {
  payment_amount: Scalars['Int'];
  payment_impUid: Scalars['String'];
  payment_type: Scalars['String'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteLoginProductArgs = {
  product_id: Scalars['String'];
};


export type IMutationLoginArgs = {
  user_email: Scalars['String'];
  user_password: Scalars['String'];
};


export type IMutationSendRequestArgs = {
  createRequestInput: ICreateRequestInput;
};


export type IMutationSendTokenEmailArgs = {
  user_email: Scalars['String'];
};


export type IMutationUpdateNicknameIntroduceArgs = {
  updateNicknameIntroduceInput: IUpdateNicknameIntroduceInput;
};


export type IMutationUpdateProductArgs = {
  product_id: Scalars['String'];
  updateProductInput: IUpdateProductInput;
};


export type IMutationUpdateProfileImageArgs = {
  user_url: Scalars['String'];
};


export type IMutationUpdateUserInfoArgs = {
  updateUserInfoInput: IUpdateUserInfoInput;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export enum IPayment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export enum IProduct_Category_Enum {
  Design = 'DESIGN',
  Document = 'DOCUMENT',
  It = 'IT',
  Marketing = 'MARKETING',
  Translate = 'TRANSLATE',
  Video = 'VIDEO'
}

export type IPayment = {
  __typename?: 'Payment';
  payment_amount: Scalars['Int'];
  payment_createdAt: Scalars['DateTime'];
  payment_id: Scalars['String'];
  payment_impUid: Scalars['String'];
  payment_status: IPayment_Status_Enum;
  payment_type: Scalars['String'];
  user: IUser;
};

export type IProduct = {
  __typename?: 'Product';
  product_category: IProduct_Category_Enum;
  product_deletedAt: Scalars['DateTime'];
  product_detailAddress: Scalars['String'];
  product_endTime: Scalars['Int'];
  product_id: Scalars['String'];
  product_main_text: Scalars['String'];
  product_postNum: Scalars['String'];
  product_roadAddress: Scalars['String'];
  product_sellOrBuy: Scalars['Boolean'];
  product_startTime: Scalars['Int'];
  product_sub_category: Scalars['String'];
  product_summary: Scalars['String'];
  product_thumbnailImage: Array<Scalars['String']>;
  product_title: Scalars['String'];
  product_workDay: IWorkday_Status_Enum;
  product_workTime: Scalars['Int'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchCategoryProduct: Array<IFetchProductOutput>;
  fetchLoginUser: IUser;
  fetchNewbieProduct: Array<IFetchProductOutput>;
  fetchPayments: Array<IPayment>;
  fetchProducts: Array<IFetchProductOutput>;
  fetchRandomProduct: Array<IFetchProductOutput>;
  fetchRequest: Array<IRequest>;
  fetchUserPaymentInfo: Array<IPayment>;
  fetchWork: Array<IRequest>;
};


export type IQueryFetchCategoryProductArgs = {
  page: Scalars['Float'];
  pageSize: Scalars['Float'];
  product_category: Scalars['String'];
};


export type IQueryFetchPaymentsArgs = {
  payment_impUid: Scalars['String'];
};


export type IQueryFetchProductsArgs = {
  page: Scalars['Float'];
  pageSize: Scalars['Float'];
};

export enum IRequest_Isaccept_Enum {
  Accept = 'ACCEPT',
  Finish = 'FINISH',
  Refuse = 'REFUSE',
  Waiting = 'WAITING'
}

export type IRequest = {
  __typename?: 'Request';
  product: IProduct;
  request_completedAt: Scalars['DateTime'];
  request_content: Scalars['String'];
  request_createAt: Scalars['DateTime'];
  request_id: Scalars['String'];
  request_isAccept: IRequest_Isaccept_Enum;
  request_price: Scalars['Int'];
  request_sentAt: Scalars['DateTime'];
  request_title: Scalars['String'];
  user: IUser;
};

export type IUpdateNicknameIntroduceInput = {
  user_introduce?: InputMaybe<Scalars['String']>;
  user_nickname?: InputMaybe<Scalars['String']>;
};

export type IUpdateProductInput = {
  product_category?: InputMaybe<Scalars['String']>;
  product_detailAddress?: InputMaybe<Scalars['String']>;
  product_endTime?: InputMaybe<Scalars['Int']>;
  product_isMain?: InputMaybe<Array<Scalars['Boolean']>>;
  product_main_text?: InputMaybe<Scalars['String']>;
  product_postNum?: InputMaybe<Scalars['String']>;
  product_roadAddress?: InputMaybe<Scalars['String']>;
  product_sellOrBuy?: InputMaybe<Scalars['Boolean']>;
  product_startTime?: InputMaybe<Scalars['Int']>;
  product_sub_category?: InputMaybe<Scalars['String']>;
  product_summary?: InputMaybe<Scalars['String']>;
  product_thumbnailImage?: InputMaybe<Array<Scalars['String']>>;
  product_title?: InputMaybe<Scalars['String']>;
  product_workDay?: InputMaybe<Scalars['String']>;
  product_workTime?: InputMaybe<Scalars['Int']>;
};

export type IUpdateUserInfoInput = {
  user_email?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
  user_portfolio?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  user_email: Scalars['String'];
  user_id: Scalars['String'];
  user_introduce?: Maybe<Scalars['String']>;
  user_name: Scalars['String'];
  user_nickname: Scalars['String'];
  user_password: Scalars['String'];
  user_phone: Scalars['String'];
  user_point: Scalars['Int'];
  user_portfolio?: Maybe<Scalars['String']>;
  user_profileImage?: Maybe<Scalars['String']>;
  user_workRate: Scalars['Int'];
};

export enum IWorkday_Status_Enum {
  Negotiation = 'NEGOTIATION',
  Weekday = 'WEEKDAY',
  Weekend = 'WEEKEND'
}
