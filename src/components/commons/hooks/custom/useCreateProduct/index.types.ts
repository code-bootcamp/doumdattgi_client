export interface IUpdate {
  product_sellOrBuy?: boolean;
  product_title?: string;
  product_summary?: string;
  product_main_text?: string;
  product_postNum?: string;
  product_roadAddress?: string;
  product_detailAddress?: string;
  product_category: string
  product_sub_category: string
  product_workDay: string
  product_startTime: number
  product_endTime: number
}

export const alternativeResultUrl = [
  {
    thumbnailImage: "",
    isMain: true
  }
];
