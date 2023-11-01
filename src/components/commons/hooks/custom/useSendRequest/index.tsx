import { useMutation } from "@apollo/client";
import { SEND_REQUEST } from "../../mutations/useMutationSendRequest";
import { useRouter } from "next/router";
import { useState } from "react";

interface IMutationData {
  product_id: string;
  request_title: string;
  request_content: string;
  request_price: string;
  request_dueDate: string;
}

export const useRequest = () => {
  const router = useRouter();

  const [isTime, setIsTime] = useState("");

  const [sendRequest] = useMutation(SEND_REQUEST);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =============== 의뢰서 작성 기능 ===============
  const onClickWriteRequest = async (data: IMutationData) => {
    try {
      const result = await sendRequest({
        variables: {
          createRequestInput: {
            product_id: router.query.id,
            request_title: data.request_title,
            request_content: data.request_content,
            request_price: data.request_price,
            request_dueDate: data.request_dueDate
          }
        }
      });
      alert("의뢰서 작성이 완료되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return { onClickWriteRequest, isTime, setIsTime, isSubmitting };
};
