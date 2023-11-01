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

export enum ICoupon_Type_Enum {
  None = "NONE",
  OneDay = "ONE_DAY",
  SevenDays = "SEVEN_DAYS",
  ThreeDays = "THREE_DAYS"
}

export type ICancelPaymentOutput = {
  __typename?: "CancelPaymentOutput";
  payment_amount: Scalars["Int"];
  payment_createdAt: Scalars["DateTime"];
  payment_id: Scalars["String"];
  payment_impUid: Scalars["String"];
  payment_status: Scalars["String"];
  payment_type: Scalars["String"];
};

export type IComment = {
  __typename?: "Comment";
  comment_createdAt: Scalars["DateTime"];
  comment_id: Scalars["String"];
  comment_text: Scalars["String"];
  request: IRequest;
  sender_id: Scalars["String"];
  user: IUser;
};

export type ICreateCommentInput = {
  request_id: Scalars["String"];
  sender_id: Scalars["String"];
  text: Scalars["String"];
};

export type ICreateProductInput = {
  product_category: Scalars["String"];
  product_date?: InputMaybe<Scalars["String"]>;
  product_detailAddress?: InputMaybe<Scalars["String"]>;
  product_endTime: Scalars["Int"];
  product_main_text: Scalars["String"];
  product_minAmount?: InputMaybe<Scalars["String"]>;
  product_possibleAmount?: InputMaybe<Scalars["String"]>;
  product_postNum?: InputMaybe<Scalars["String"]>;
  product_roadAddress?: InputMaybe<Scalars["String"]>;
  product_sellOrBuy: Scalars["Boolean"];
  product_startTime: Scalars["Int"];
  product_sub_category: Scalars["String"];
  product_summary?: InputMaybe<Scalars["String"]>;
  product_thumbnailImage?: InputMaybe<Array<IThumbnail>>;
  product_title: Scalars["String"];
  product_workDay: Scalars["String"];
  product_workTime?: InputMaybe<Scalars["Int"]>;
};

export type ICreateRequestInput = {
  product_id: Scalars["String"];
  request_content: Scalars["String"];
  request_dueDate: Scalars["DateTime"];
  request_price: Scalars["Int"];
  request_title: Scalars["String"];
};

export type ICreateUserInput = {
  user_email: Scalars["String"];
  user_name: Scalars["String"];
  user_nickname: Scalars["String"];
  user_password: Scalars["String"];
  user_phone: Scalars["String"];
};

export type IFetchLikeCategoryOutput = {
  __typename?: "FetchLikeCategoryOutput";
  image_url: Scalars["String"];
  pick_count: Scalars["Float"];
  product_product_category: Scalars["String"];
  product_product_sub_category: Scalars["String"];
  product_product_id: Scalars["String"];
  product_product_sellOrBuy: Scalars["Boolean"];
  product_product_title: Scalars["String"];
  product_product_workDay: Scalars["String"];
  u_user_nickname: Scalars["String"];
  u_user_profileImage?: Maybe<Scalars["String"]>;
};

export type IFetchLikeSubCategoryOutput = {
  __typename?: "FetchLikeSubCategoryOutput";
  image_url: Scalars["String"];
  pick_count: Scalars["Float"];
  product_product_category: Scalars["String"];
  product_product_id: Scalars["String"];
  product_product_sellOrBuy: Scalars["Boolean"];
  product_product_sub_category: Scalars["String"];
  product_product_title: Scalars["String"];
  product_product_workDay: Scalars["String"];
  u_user_nickname: Scalars["String"];
  u_user_profileImage?: Maybe<Scalars["String"]>;
};

export type IFetchMyPickOutput = {
  __typename?: "FetchMyPickOutput";
  i_image_url: Scalars["String"];
  p_product_category: Scalars["String"];
  p_product_id: Scalars["String"];
  p_product_sellOrBuy: Scalars["Boolean"];
  p_product_summary: Scalars["String"];
  p_product_title: Scalars["String"];
  p_product_workDay: Scalars["String"];
  pick_pick_id: Scalars["String"];
  u_user_nickname: Scalars["String"];
  u_user_profileImage?: Maybe<Scalars["String"]>;
};

export type IFetchProductOutput = {
  __typename?: "FetchProductOutput";
  image_url: Scalars["String"];
  i_image_url: Scalars["String"];
  product_product_category: Scalars["String"];
  product_product_createdAt: Scalars["DateTime"];
  product_product_date?: Maybe<Scalars["String"]>;
  product_product_id: Scalars["String"];
  product_product_minAmount?: Maybe<Scalars["String"]>;
  product_product_possibleAmount?: Maybe<Scalars["String"]>;
  product_product_sellOrBuy: Scalars["Boolean"];
  product_product_sub_category: Scalars["String"];
  product_product_title: Scalars["String"];
  product_product_workDay: Scalars["String"];
  u_user_nickname: Scalars["String"];
  u_user_profileImage?: Maybe<Scalars["String"]>;
};

export type IFetchSearchProductOutput = {
  __typename?: "FetchSearchProductOutput";
  image_url: Scalars["String"];
  i_image_url: Scalars["String"];
  pick_count: Scalars["Float"];
  product_product_category: Scalars["String"];
  product_product_id: Scalars["String"];
  product_product_sellOrBuy: Scalars["Boolean"];
  product_product_summary?: Maybe<Scalars["String"]>;
  product_product_title: Scalars["String"];
  product_product_workDay: Scalars["String"];
  u_user_nickname: Scalars["String"];
  u_user_profileImage?: Maybe<Scalars["String"]>;
  product_product_sub_category: Scalars["String"];
};

export type IFetchSubCategoryOutput = {
  __typename?: "FetchSubCategoryOutput";
  image_url: Scalars["String"];
  i_image_url: Scalars["String"];
  product_product_category: Scalars["String"];
  product_product_createdAt: Scalars["DateTime"];
  product_product_date?: Maybe<Scalars["String"]>;
  product_product_id: Scalars["String"];
  product_product_minAmount?: Maybe<Scalars["String"]>;
  product_product_possibleAmount?: Maybe<Scalars["String"]>;
  product_product_sellOrBuy: Scalars["Boolean"];
  product_product_sub_category: Scalars["String"];
  product_product_title: Scalars["String"];
  product_product_workDay: Scalars["String"];
  u_user_nickname: Scalars["String"];
  u_user_profileImage?: Maybe<Scalars["String"]>;
};

export type IImage = {
  __typename?: "Image";
  image_id: Scalars["String"];
  image_isMain: Scalars["Boolean"];
  image_url: Scalars["String"];
  product: IProduct;
};

export enum IMileage_Status_Enum {
  Expense = "EXPENSE",
  Income = "INCOME"
}

export type IMileage = {
  __typename?: "Mileage";
  mileage_coupon?: Maybe<ICoupon_Type_Enum>;
  mileage_createdAt: Scalars["DateTime"];
  mileage_id: Scalars["String"];
  mileage_status: IMileage_Status_Enum;
  payment_amount: Scalars["Int"];
  product: IProduct;
  user: IUser;
};

export type IMutation = {
  __typename?: "Mutation";
  cancelPayment: ICancelPaymentOutput;
  checkValidTokenEMAIL: Scalars["Boolean"];
  checkValidTokenFindEmailBySMS: Scalars["String"];
  checkValidTokenFindPwdBySMS: Scalars["Boolean"];
  createComment: IComment;
  createPayment: IPayment;
  createPick: Scalars["String"];
  createProduct: IProduct;
  createUser: IUser;
  deleteLoginProduct: Scalars["Boolean"];
  deleteUser: Scalars["Boolean"];
  login: Scalars["String"];
  logout: Scalars["String"];
  purchaseCoupon: Scalars["Boolean"];
  requestAcceptRefuse: IRequest;
  requestProcess: Scalars["Boolean"];
  resetPassword: Scalars["Boolean"];
  resetPasswordSettingPage: Scalars["Boolean"];
  restoreAccessToken: Scalars["String"];
  sendRequest: IRequest;
  sendTokenEmail: Scalars["String"];
  sendTokenSMS: Scalars["String"];
  updateNicknameIntroduce: IUser;
  updateProduct: Scalars["Boolean"];
  updateProfileImage: IUser;
  updateUserInfo: IUser;
  uploadFile: Array<Scalars["String"]>;
};

export type IMutationCancelPaymentArgs = {
  payment_impUid: Scalars["String"];
  payment_type: Scalars["String"];
};

export type IMutationCheckValidTokenEmailArgs = {
  user_email: Scalars["String"];
  user_token: Scalars["String"];
};

export type IMutationCheckValidTokenFindEmailBySmsArgs = {
  user_phone: Scalars["String"];
  user_token: Scalars["String"];
};

export type IMutationCheckValidTokenFindPwdBySmsArgs = {
  user_phone: Scalars["String"];
  user_token: Scalars["String"];
};

export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};

export type IMutationCreatePaymentArgs = {
  payment_amount: Scalars["Int"];
  payment_impUid: Scalars["String"];
  payment_type: Scalars["String"];
};

export type IMutationCreatePickArgs = {
  product_id: Scalars["String"];
};

export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationDeleteLoginProductArgs = {
  product_id: Scalars["String"];
};

export type IMutationLoginArgs = {
  user_email: Scalars["String"];
  user_password: Scalars["String"];
};

export type IMutationPurchaseCouponArgs = {
  coupon: Scalars["String"];
  productId: Scalars["String"];
};

export type IMutationRequestAcceptRefuseArgs = {
  acceptRefuse: Scalars["String"];
  request_id: Scalars["String"];
};

export type IMutationRequestProcessArgs = {
  process: Scalars["String"];
  request_id: Scalars["String"];
};

export type IMutationResetPasswordArgs = {
  new_password: Scalars["String"];
  user_phone: Scalars["String"];
};

export type IMutationResetPasswordSettingPageArgs = {
  new_password: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationSendRequestArgs = {
  createRequestInput: ICreateRequestInput;
};

export type IMutationSendTokenEmailArgs = {
  user_email: Scalars["String"];
};

export type IMutationSendTokenSmsArgs = {
  user_phone: Scalars["String"];
};

export type IMutationUpdateNicknameIntroduceArgs = {
  updateNicknameIntroduceInput: IUpdateNicknameIntroduceInput;
};

export type IMutationUpdateProductArgs = {
  product_id: Scalars["String"];
  updateProductInput: IUpdateProductInput;
};

export type IMutationUpdateProfileImageArgs = {
  user_url: Scalars["String"];
};

export type IMutationUpdateUserInfoArgs = {
  updateUserInfoInput: IUpdateUserInfoInput;
};

export type IMutationUploadFileArgs = {
  files: Array<Scalars["Upload"]>;
};

export enum IPayment_Status_Enum {
  Cancel = "CANCEL",
  Payment = "PAYMENT",
  Refund = "REFUND",
  Request = "REQUEST",
  Sell = "SELL"
}

export enum IProduct_Category_Enum {
  Design = "DESIGN",
  Document = "DOCUMENT",
  It = "IT",
  Marketing = "MARKETING",
  Translate = "TRANSLATE",
  Video = "VIDEO"
}

export type IPayment = {
  __typename?: "Payment";
  payment_amount: Scalars["Int"];
  payment_createdAt: Scalars["DateTime"];
  payment_id: Scalars["String"];
  payment_impUid: Scalars["String"];
  payment_status: IPayment_Status_Enum;
  payment_type: Scalars["String"];
  user: IUser;
};

export type IPick = {
  __typename?: "Pick";
  pick_id?: Maybe<Scalars["String"]>;
  product: IProduct;
  user: IUser;
};

export type IProduct = {
  __typename?: "Product";
  images: Array<IImage>;
  mileage?: Maybe<IMileage>;
  pick: Array<IPick>;
  product_category: IProduct_Category_Enum;
  product_date?: Maybe<Scalars["String"]>;
  product_deletedAt?: Maybe<Scalars["DateTime"]>;
  product_detailAddress?: Maybe<Scalars["String"]>;
  product_endTime: Scalars["Int"];
  product_id: Scalars["String"];
  product_main_text: Scalars["String"];
  product_minAmount?: Maybe<Scalars["String"]>;
  product_possibleAmount?: Maybe<Scalars["String"]>;
  product_postNum?: Maybe<Scalars["String"]>;
  product_roadAddress?: Maybe<Scalars["String"]>;
  product_sellOrBuy: Scalars["Boolean"];
  product_startTime: Scalars["Int"];
  product_sub_category: Scalars["String"];
  product_summary?: Maybe<Scalars["String"]>;
  product_title: Scalars["String"];
  product_workDay: IWorkday_Status_Enum;
  product_workTime?: Maybe<Scalars["Int"]>;
  user: IUser;
};

export type IQuery = {
  __typename?: "Query";
  fetchAllProducts: Array<IFetchProductOutput>;
  fetchBuyerRequest: Array<IRequest>;
  fetchCategoryProduct: Array<IFetchProductOutput>;
  fetchComments: Array<IComment>;
  fetchDetailProduct: IProduct;
  fetchLikeCategoryProduct: Array<IFetchLikeCategoryOutput>;
  fetchLikeSubCategoryProduct: Array<IFetchLikeSubCategoryOutput>;
  fetchLoginUser: IUser;
  fetchMileageHistory: Array<IMileage>;
  fetchMileageProductHistory: Array<IProduct>;
  fetchMyCategoryProduct: Array<IProduct>;
  fetchMyNotCouponProduct: Array<IProduct>;
  fetchMyProduct: Array<IProduct>;
  fetchNewbieProduct: Array<IFetchProductOutput>;
  fetchOneRequest: IRequest;
  fetchPayments: Array<IPayment>;
  fetchPickOrNot: Scalars["Boolean"];
  fetchPickUserProduct: Array<IFetchMyPickOutput>;
  fetchProducts: Array<IFetchProductOutput>;
  fetchRandomMileageProduct: Array<IProduct>;
  fetchRandomProduct: Array<IFetchProductOutput>;
  fetchSearchProduct: Array<IFetchSearchProductOutput>;
  fetchSellCategoryProducts: Array<IFetchProductOutput>;
  fetchSellMyProduct: Array<IProduct>;
  fetchSellProduct: Array<IFetchProductOutput>;
  fetchSellerWork: Array<IRequest>;
  fetchSubCategoryProduct: Array<IFetchSubCategoryOutput>;
  fetchUserSlot: ISlot;
};

export type IQueryFetchCategoryProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
  product_category: Scalars["String"];
};

export type IQueryFetchCommentsArgs = {
  request_id: Scalars["String"];
};

export type IQueryFetchDetailProductArgs = {
  product_id: Scalars["String"];
};

export type IQueryFetchLikeCategoryProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
  product_category: Scalars["String"];
};

export type IQueryFetchLikeSubCategoryProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
  product_sub_category: Scalars["String"];
};

export type IQueryFetchMyCategoryProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
  product_category: Scalars["String"];
};

export type IQueryFetchMyProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
};

export type IQueryFetchOneRequestArgs = {
  request_id: Scalars["String"];
};

export type IQueryFetchPaymentsArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
  payment_status?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchPickOrNotArgs = {
  product_id: Scalars["String"];
};

export type IQueryFetchPickUserProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
};

export type IQueryFetchProductsArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
};

export type IQueryFetchRandomMileageProductArgs = {
  category: Scalars["String"];
};

export type IQueryFetchSearchProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
  search: Scalars["String"];
};

export type IQueryFetchSellCategoryProductsArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
  product_category: Scalars["String"];
};

export type IQueryFetchSellMyProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
};

export type IQueryFetchSubCategoryProductArgs = {
  page: Scalars["Float"];
  pageSize: Scalars["Float"];
  product_sub_category: Scalars["String"];
};

export enum IRequest_Isaccept_Enum {
  Accept = "ACCEPT",
  Finish = "FINISH",
  Refuse = "REFUSE",
  Waiting = "WAITING"
}

export type IRequest = {
  __typename?: "Request";
  buyer_email: Scalars["String"];
  buyer_id: Scalars["String"];
  buyer_nickname: Scalars["String"];
  buyer_profileImage: Scalars["String"];
  product: IProduct;
  request_completedAt?: Maybe<Scalars["DateTime"]>;
  request_content: Scalars["String"];
  request_createAt: Scalars["DateTime"];
  request_dueDate: Scalars["DateTime"];
  request_id: Scalars["String"];
  request_isAccept: IRequest_Isaccept_Enum;
  request_price: Scalars["Int"];
  request_sendAt?: Maybe<Scalars["DateTime"]>;
  request_startAt?: Maybe<Scalars["DateTime"]>;
  request_title: Scalars["String"];
  seller_email: Scalars["String"];
  seller_id: Scalars["String"];
  seller_nickname: Scalars["String"];
  seller_profileImage: Scalars["String"];
};

export type ISlot = {
  __typename?: "Slot";
  slot_first: Scalars["Boolean"];
  slot_id: Scalars["String"];
  slot_second: Scalars["Boolean"];
  slot_third: Scalars["Boolean"];
  user: IUser;
};

export type IThumbnail = {
  isMain: Scalars["Boolean"];
  thumbnailImage: Scalars["String"];
};

export type IUpdateNicknameIntroduceInput = {
  user_introduce?: InputMaybe<Scalars["String"]>;
  user_nickname?: InputMaybe<Scalars["String"]>;
};

export type IUpdateProductInput = {
  product_category?: InputMaybe<Scalars["String"]>;
  product_date?: InputMaybe<Scalars["String"]>;
  product_detailAddress?: InputMaybe<Scalars["String"]>;
  product_endTime?: InputMaybe<Scalars["Int"]>;
  product_main_text?: InputMaybe<Scalars["String"]>;
  product_minAmount?: InputMaybe<Scalars["String"]>;
  product_possibleAmount?: InputMaybe<Scalars["String"]>;
  product_postNum?: InputMaybe<Scalars["String"]>;
  product_roadAddress?: InputMaybe<Scalars["String"]>;
  product_sellOrBuy?: InputMaybe<Scalars["Boolean"]>;
  product_startTime?: InputMaybe<Scalars["Int"]>;
  product_sub_category?: InputMaybe<Scalars["String"]>;
  product_summary?: InputMaybe<Scalars["String"]>;
  product_thumbnailImage?: InputMaybe<Array<IThumbnail>>;
  product_title?: InputMaybe<Scalars["String"]>;
  product_workDay?: InputMaybe<Scalars["String"]>;
  product_workTime?: InputMaybe<Scalars["Int"]>;
};

export type IUpdateUserInfoInput = {
  user_email?: InputMaybe<Scalars["String"]>;
  user_name?: InputMaybe<Scalars["String"]>;
  user_portfolio?: InputMaybe<Scalars["String"]>;
};

export type IUser = {
  __typename?: "User";
  mileage: Array<IMileage>;
  payment: Array<IPayment>;
  product: Array<IProduct>;
  slot: ISlot;
  user_email: Scalars["String"];
  user_id: Scalars["String"];
  user_introduce?: Maybe<Scalars["String"]>;
  user_mileage: Scalars["Int"];
  user_name: Scalars["String"];
  user_nickname: Scalars["String"];
  user_password: Scalars["String"];
  user_phone: Scalars["String"];
  user_point: Scalars["Int"];
  user_portfolio?: Maybe<Scalars["String"]>;
  user_profileImage?: Maybe<Scalars["String"]>;
  user_provider?: Maybe<Scalars["String"]>;
  user_workRate: Scalars["Int"];
};

export enum IWorkday_Status_Enum {
  Negotiation = "NEGOTIATION",
  Weekday = "WEEKDAY",
  Weekend = "WEEKEND"
}
