import { Editor } from "@toast-ui/react-editor";

export interface EditorInstance {
  getInstance: () => Editor;
}

export interface EditorInstance2 extends Editor {
  getHTML: () => string;
}

export interface IFormData {
  product_title?: string;
  product_summary?: string;
  product_main_text?: string;
  product_minAmount?: string;
  product_sellOrBuy?: boolean;
  product_postNum?: string;
  product_roadAddress?: string;
  product_detailAddress?: string;
  product_category: string
  product_sub_category: string
  product_workDay: string
  product_startTime: number
  product_endTime: number
}

export interface IProps {
  isEdit: boolean;
  sellOrBuy: boolean
  WorkDay?: string;
}
