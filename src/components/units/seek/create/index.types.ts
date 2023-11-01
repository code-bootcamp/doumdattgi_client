export interface ICreateSeek {
  product_title: string;
  product_summary: string;
  product_main_text: string;
  product_minAmount: string;
  product_sellOrBuy: boolean;
  product_postNum?: string;
  product_roadAddress?: string;
  product_detailAddress?: string;
  product_category: string
  product_sub_category: string
  product_workDay: string
  product_workTime: number
  product_startTime: number
  product_endTime: number
  product_thumbnailImage?: any
  product_date: string
  product_possibleAmount: string
}
