import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { REQUEST_ACCEPT_REFUSE } from "../../mutations/useMutationRequestAcceptRefuse";

interface IMutationData {
  request_id: string;
  seller_id: string;
  buyer_id: string;
}

export const useRequestAcceptRefuse = () => {
  const router = useRouter();

  const [RequestAcceptRefuse] = useMutation(REQUEST_ACCEPT_REFUSE);

  // =============== 의뢰서 작성 기능 ===============
  const onClickRequestAcceptRefuse = async (data: IMutationData) => {
    try {
      const result = await RequestAcceptRefuse({
        variables: {
          request_id: router.query.id,
          seller_id: data.seller_id,
          buyer_id: data.buyer_id
        }
      });
      alert("의뢰서 작성이 완료되었습니다.");
      void router.push(`/${result.data.sendRequest.product_id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return { onClickRequestAcceptRefuse };
};
