import { useForm } from "react-hook-form";
import { useMutationCreateComment } from "../../commons/hooks/mutations/useMutationCreateComment";
import InputHeight50px from "../../commons/inputs/InputHeight50px";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateComment } from "../../../commons/libraries/schema";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/useQueryFetchLoginUser";
import {
  FETCH_COMMENTS,
  useQueryFetchComments
} from "../../commons/hooks/queries/useQueryFetchComments";
import { useRouter } from "next/router";
import { getDate } from "../../../commons/libraries/getDate";

export default function Comment(props): JSX.Element {
  const router = useRouter();

  const [createComment] = useMutationCreateComment();
  const { data: user } = useQueryFetchLoginUser();
  const { data: comment } = useQueryFetchComments(router.query.id);

  console.log(comment?.fetchComments);
  const { register, setValue, trigger, handleSubmit, formState, resetField } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaCreateComment)
  });

  console.log(props.data);
  const onClickCreateComment = async data => {
    const request_id = props.data?.fetchOneRequest?.request_id;

    const sender_id = user?.fetchLoginUser?.user_id;

    try {
      const result = await createComment({
        variables: {
          createCommentInput: {
            request_id,
            sender_id,
            text: data.text
          }
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              request_id: router.query.id
            }
          }
        ]
      });
      resetField("text")
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.WrapperBody>
          {comment?.fetchComments?.map(el => (
            <>
              <S.ReceivingBox>
                <S.Date>{getDate(el.comment_comment_createdAt)}</S.Date>
                <S.ChatBox>{el.comment_comment_text}</S.ChatBox>
              </S.ReceivingBox>
            </>
          ))}
          <S.SendingBox>
            <S.SenderIcon src="/IU.jpeg" />
            <div>
              <S.Sender>아이유</S.Sender>
              <S.ChatBox>안녕</S.ChatBox>
            </div>
            <S.Date>23.05.10</S.Date>
          </S.SendingBox>
        </S.WrapperBody>
        <form onSubmit={handleSubmit(onClickCreateComment)}>
          <S.WrapperFooter>
            <InputHeight50px
              placeholder="메세지를 입력하세요"
              register={register("text")}
            />
            <S.SendingBtn>전송</S.SendingBtn>
          </S.WrapperFooter>
        </form>
      </S.Wrapper>
    </>
  );
}
