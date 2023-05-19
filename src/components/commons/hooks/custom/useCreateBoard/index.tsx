import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../mutations/useMutationCreateBoard";
import { useRouter } from "next/router";

interface IFormData {
  title: string;
  tags: string;
  remarks: string;
  contents: string;
  address: string;
  addressDetail: string;
  zonecode: string;
}

export const useBoard = () => {
  const router = useRouter();

  const [createBoardWrite] = useMutation(CREATE_BOARD);

  // =============== 글작성 ===============
  const onClickWrite = async (data: IFormData) => {
    try {
      const result = await createBoardWrite({
        variables: {
          title: data.title,
          tags: data.tags,
          remarks: data.remarks,
          contents: data.contents,
          address: data.address,
          addressDetail: data.addressDetail,
          zonecode: data.zonecode
        }
      });
      alert("게시글 등록이 완료되었습니다.");
      void router.push(`/${result.data?.createBoard._id as string}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return { onClickWrite };
};
