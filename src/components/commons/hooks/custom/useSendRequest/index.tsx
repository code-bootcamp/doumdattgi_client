import { useMutation } from "@apollo/client";
import { SEND_REQUEST } from "../../mutations/useMutationSendRequest";
import { useRouter } from "next/router";
import { useState } from "react";

interface IFormData {
  product_id: string;
  request_title: string;
  request_content: string;
  request_price: number;
}

export const useRequest = () => {
  const router = useRouter();

  const [isTime, setIsTime] = useState("");

  const [createRequest] = useMutation(SEND_REQUEST);

  // =============== 의뢰서 작성 기능 ===============
  const onClickWriteRequest = async (data: IFormData) => {
    try {
      const result = await createRequest({
        variables: {
          product_id: router.query.product_id,
          request_title: data.request_title,
          request_content: data.request_content,
          request_price: isTime
        }
      });
      alert("의뢰서 작성이 완료되었습니다.");
      void router.push({
        /* push할 곳 작성 해야합니당 */
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return { onClickWriteRequest, isTime, setIsTime };
};
