import { useMutation } from "@apollo/client";
import { CREATE_REQUEST } from "../../mutations/useMutationCreateRequest";
import { useRouter } from "next/router";
import { useState } from "react";

interface IFormData {
  title: string;
  contents: string;
  isTime: number;
}

export const useRequest = () => {
  const router = useRouter();

  const [isTime, setIsTime] = useState("");

  const [createRequest] = useMutation(CREATE_REQUEST);

  // =============== 의뢰서 작성 기능 ===============
  const onClickWriteRequest = async (data: IFormData) => {
    try {
      const result = await createRequest({
        variables: {
          title: data.title,
          contents: data.contents,
          wage: isTime
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
