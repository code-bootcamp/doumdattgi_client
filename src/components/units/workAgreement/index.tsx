import ButtonHeight70px from "../../commons/buttons/ButtonHeight70px";
import * as S from "./workAgreement.styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import CommentDrawer from "../../commons/parts/commentDrawer";
import { useQueryFetchOneRequest } from "../../commons/hooks/queries/useQueryFetchOneRequest";
import { useRouter } from "next/router";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/useQueryFetchLoginUser";
import { useRequestAcceptRefuse } from "../../commons/hooks/custom/useRequestAcceptRefuse/index";

export default function WorkAgreement(): JSX.Element {
  const router = useRouter();

  const { data, refetch } = useQueryFetchOneRequest(router.query.id as string);
  const { data: login } = useQueryFetchLoginUser();

  const {
    onClickRequestAccept,
    isAccept,
    isRefuse,
    isDone,
    onClickRequestRefuse,
    onClickRequestDone
  } = useRequestAcceptRefuse();

  const ID = login?.fetchLoginUser?.user_id;
  const time = Number(data?.fetchOneRequest.request_price) / 9620;

  return (
    <>
      <S.CommentBoxWrapper>
        <CommentDrawer />
        <S.Wrapper>
          <S.Category>
            {data?.fetchOneRequest.request_isAccept === "WAITING"
              ? "대기중"
              : data?.fetchOneRequest.request_isAccept === "ACCEPTED"
              ? "진행중"
              : data?.fetchOneRequest.request_isAccept === "REFUSE"
              ? "거절됨"
              : "종료"}
          </S.Category>
          <S.Title>{data?.fetchOneRequest?.request_title}</S.Title>
          <S.ProcessBox>
            <S.StatusBox>
              <S.Check></S.Check>
              <S.Theme>신청</S.Theme>
              <S.Date>2023.05.XX 완료</S.Date>
            </S.StatusBox>
            <S.Line />
            <S.StatusBox>
              <S.StartWork></S.StartWork>
              <S.Theme>작업 시작</S.Theme>
              <S.Date>2023.05.XX 완료</S.Date>
            </S.StatusBox>
            <S.Line1 />
            <S.StatusBox>
              <S.SendWork></S.SendWork>
              <S.Theme>작업물 전달</S.Theme>
              <S.Date>2023.05.XX 완료</S.Date>
            </S.StatusBox>
            <S.Line2 />
            <S.StatusBox>
              <S.Complete></S.Complete>
              <S.Theme>완료</S.Theme>
              <S.Date>2023.05.XX 완료</S.Date>
            </S.StatusBox>
          </S.ProcessBox>
          <S.ContentsDetail>신청 내용</S.ContentsDetail>
          <S.Contents>{data?.fetchOneRequest?.request_content}</S.Contents>
          <S.PaymentBox>
            <S.Price>9620</S.Price>
            <S.SpecialCharacter> x </S.SpecialCharacter>
            <S.Price>{time}</S.Price>
            <S.SpecialCharacter> = </S.SpecialCharacter>
            <S.SpecialCharacter> ₩ </S.SpecialCharacter>
            <S.Price>{data?.fetchOneRequest?.request_price}</S.Price>
          </S.PaymentBox>
          {ID === data?.fetchOneRequest?.buyer_id ? (
            <S.Box>
              {!isAccept ? (
                <>
                  <S.AcceptBox>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      style={{ fontSize: "60px", marginRight: "10px" }}
                    />
                    수락 대기중
                  </S.AcceptBox>
                </>
              ) : (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/reject.png" />
                    의뢰 거절
                  </S.AcceptBox>
                </>
              )}
            </S.Box>
          ) : (
            <S.Box>
              {isAccept ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    의뢰 수락
                  </S.AcceptBox>
                </>
              ) : isRefuse ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/reject.png" />
                    의뢰 거절
                  </S.AcceptBox>
                </>
              ) : (
                <>
                  <S.Btn onClick={onClickRequestRefuse}>거절하기</S.Btn>
                  <S.Between></S.Between>
                  <S.Btn onClick={onClickRequestAccept}>수락하기</S.Btn>
                </>
              )}
            </S.Box>
          )}
          {isAccept ? (
            <>
              <S.Contents>
                작업 완료 전, 꼭 확인해주세요.
                <S.ContentsIndex>
                  • 작업물 전달은 이메일로 이루어집니다. 상대방의 이메일로
                  올바르게 전송하였는지 확인해주세요.
                </S.ContentsIndex>
                <S.Box>
                  • 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을 취소할
                  수 있어요. 이 경우 환불 금액은 상호 협의한 금액에 따라요.
                </S.Box>
              </S.Contents>
              <S.Btn2 onClick={onClickRequestDone}>작업 완료하기</S.Btn2>
            </>
          ) : (
            <></>
          )}

          <S.Box>
            <S.UserBox>
              <S.User>작업자</S.User>
              <S.UserPic src="/Ellipse 8.png" />
              <S.User>{data?.fetchOneRequest?.seller_nickname}</S.User>
              <S.UserEmail>{data?.fetchOneRequest?.seller_id}</S.UserEmail>
            </S.UserBox>
            <S.Between>
              <S.Arrow src="/Vector 3.png" />
              <S.Arrow src="/Vector 4.png" />
            </S.Between>
            <S.UserBox>
              <S.User>신청자</S.User>
              <S.UserPic src="/Ellipse 8 (1).png" />
              <S.User>{data?.fetchOneRequest?.buyer_nickname}</S.User>
              <S.UserEmail>{data?.fetchOneRequest?.buyer_id}</S.UserEmail>
            </S.UserBox>
          </S.Box>
        </S.Wrapper>
      </S.CommentBoxWrapper>
    </>
  );
}
