import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { REQUEST_ACCEPT_REFUSE } from "../../mutations/useMutationRequestAcceptRefuse";
import { useState } from "react";

interface IMutationData {
  request_id: string;
  seller_id: string;
  buyer_id: string;
}

export const useRequestAcceptRefuse = () => {
  const router = useRouter();
  const [isAccept, setIsAccept] = useState(false);
  const [isRefuse, setIsRefuse] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [RequestAcceptRefuse] = useMutation(REQUEST_ACCEPT_REFUSE);

  // 의뢰 수락하기
  const onClickRequestAccept = async (data: IMutationData) => {
    try {
      const result = await RequestAcceptRefuse({
        variables: {
          acceptRefuse: "수락하기",
          request_id: router.query.id
        }
      });
      alert("의뢰가 수락되었습니다.");
      setIsAccept(true);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 의뢰 거절하기
  const onClickRequestRefuse = async (data: IMutationData) => {
    try {
      const result = await RequestAcceptRefuse({
        variables: {
          acceptRefuse: "거절하기",
          request_id: router.query.id
        }
      });
      alert("의뢰가 거절되었습니다.");
      setIsRefuse(true);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 의뢰 완료하기
  const onClickRequestDone = async (data: IMutationData) => {
    try {
      const result = await RequestAcceptRefuse({
        variables: {
          acceptRefuse: "완료하기",
          request_id: router.query.id
        }
      });
      alert("의뢰가 완료되었습니다.");
      setIsDone(true);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    onClickRequestAccept,
    isAccept,
    isRefuse,
    isDone,
    onClickRequestRefuse,
    onClickRequestDone
  };
};
