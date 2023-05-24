import * as S from "./workAgreement.styles";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import CommentDrawer from "../../commons/parts/commentDrawer";
import { useQueryFetchOneRequest } from "../../commons/hooks/queries/useQueryFetchOneRequest";
import { useRouter } from "next/router";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/useQueryFetchLoginUser";
import { useRequestAcceptRefuse } from "../../commons/hooks/custom/useRequestAcceptRefuse/index";
import { getDate } from "../../../commons/libraries/getDate";
import { useRequestProcess } from "../../commons/hooks/custom/useRequestProcess/index";

export default function WorkAgreement(): JSX.Element {
  const router = useRouter();

  const { data } = useQueryFetchOneRequest(router.query.id as string);
  const { data: login } = useQueryFetchLoginUser();

  const { onClickRequestAccept, onClickRequestRefuse, onClickRequestDone } =
    useRequestAcceptRefuse();

  const { onClickRequestProcessBuyer, onClickRequestProcessSeller } =
    useRequestProcess();

  const ID = login?.fetchLoginUser?.user_id;
  const time = Number(data?.fetchOneRequest.request_price) / 9620;
  const create = getDate(data?.fetchOneRequest.request_createAt);
  const start = getDate(data?.fetchOneRequest.request_startAt);
  const send = getDate(data?.fetchOneRequest.request_sendAt);
  const completed = getDate(data?.fetchOneRequest.request_completedAt);
  const isAccept = data?.fetchOneRequest?.request_isAccept;

  return (
    <>
      <S.CommentBoxWrapper>
        <CommentDrawer />
        <S.Wrapper>
          <S.Category>
            {isAccept === "WAITING" && completed === "1970-1-1" ? (
              "대기중"
            ) : (
              <></>
            )}
            {isAccept === "ACCEPT" && completed === "1970-1-1" ? (
              "진행중"
            ) : (
              <></>
            )}
            {isAccept === "REFUSE" ? "거절됨" : <></>}
            {completed !== "1970-1-1" ? "종료" : <></>}
          </S.Category>
          <S.Title>{data?.fetchOneRequest?.request_title}</S.Title>
          <S.ProcessBox>
            <S.StatusBox>
              <S.Check>
                <S.CheckImage src="/check.png" />
              </S.Check>
              <S.Theme>신청</S.Theme>
              <S.Date>{create}</S.Date>
            </S.StatusBox>
            <S.Line />
            <S.StatusBox>
              {start === "1970-1-1" ? (
                <S.NoneCheck>
                  <S.CheckImage src="/check.png" />
                </S.NoneCheck>
              ) : (
                <>
                  <S.StartWork>
                    <S.CheckImage src="/check.png" />
                  </S.StartWork>
                  <S.Theme>작업 시작</S.Theme> <S.Date>{start}</S.Date>
                </>
              )}
            </S.StatusBox>
            {start === "1970-1-1" ? <S.NoneLine /> : <S.Line1 />}
            <S.StatusBox>
              {send === "1970-1-1" ? (
                <S.NoneCheck>
                  <S.CheckImage src="/check.png" />
                </S.NoneCheck>
              ) : (
                <>
                  <S.SendWork>
                    <S.CheckImage src="/check.png" />
                  </S.SendWork>
                  <S.Theme>작업물 전달</S.Theme>
                  <S.Date>{send}</S.Date>
                </>
              )}
            </S.StatusBox>
            {send === "1970-1-1" ? <S.NoneLine /> : <S.Line2 />}
            <S.StatusBox>
              {completed === "1970-1-1" ? (
                <S.NoneCheck>
                  <S.CheckImage src="/check.png" />
                </S.NoneCheck>
              ) : (
                <>
                  <S.Complete>
                    <S.CheckImage src="/check.png" />
                  </S.Complete>
                  <S.Theme>완료</S.Theme>
                  <S.Date>{completed}</S.Date>
                </>
              )}
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
          {data?.fetchOneRequest?.buyer_id === ID ? (
            <>
              {isAccept === "WAITING" && start === "1970-1-1" ? (
                <S.AcceptBox>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    style={{ fontSize: "60px", marginRight: "10px" }}
                  />
                  수락 대기중
                </S.AcceptBox>
              ) : (
                <></>
              )}
              {send === "1970-1-1" && isAccept === "ACCEPT" ? (
                <>
                  <S.AcceptBox>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      style={{ fontSize: "60px", marginRight: "10px" }}
                    />
                    작업 완료 대기중
                  </S.AcceptBox>
                </>
              ) : (
                <></>
              )}
              {send !== "1970-1-1" && completed === "1970-1-1" ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    작업 완료
                  </S.AcceptBox>
                  <S.Contents>
                    작업 완료 확정 전, 꼭 확인해주세요.
                    <S.ContentsIndex>
                      • 작업물 전달은 이메일로 이루어집니다. 상대방의 이메일로
                      올바르게 전송하였는지 확인해주세요.
                    </S.ContentsIndex>
                    <S.Box>
                      • 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을
                      취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                      따라요.
                    </S.Box>
                  </S.Contents>
                  <S.Btn2
                    onClick={() => {
                      onClickRequestProcessBuyer(data),
                        onClickRequestDone(data);
                    }}
                  >
                    작업 완료 확정하기
                  </S.Btn2>
                </>
              ) : (
                <></>
              )}
              {isAccept === "REFUSE" ? (
                <S.AcceptBox>
                  <S.Icon src="/reject.png" />
                  의뢰 거절
                </S.AcceptBox>
              ) : (
                <></>
              )}
              {create !== "1970-1-1" &&
              start !== "1970-1-1" &&
              send !== "1970-1-1" &&
              completed !== "1970-1-1" ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    작업 확정 완료
                  </S.AcceptBox>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}

          {data?.fetchOneRequest?.seller_id === ID ? (
            <>
              {isAccept === "WAITING" && completed === "1970-1-1" ? (
                <S.Box>
                  <S.Btn onClick={onClickRequestRefuse}>거절하기</S.Btn>
                  <S.Between></S.Between>
                  <S.Btn onClick={onClickRequestAccept}>수락하기</S.Btn>
                </S.Box>
              ) : (
                <></>
              )}
              {isAccept === "ACCEPT" && send === "1970-1-1" ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    의뢰 수락
                  </S.AcceptBox>

                  <S.Contents>
                    작업 완료 전, 꼭 확인해주세요.
                    <S.ContentsIndex>
                      • 작업물 전달은 이메일로 이루어집니다. 상대방의 이메일로
                      올바르게 전송하였는지 확인해주세요.
                    </S.ContentsIndex>
                    <S.Box>
                      • 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을
                      취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                      따라요.
                    </S.Box>
                  </S.Contents>
                  <S.Btn2 onClick={onClickRequestProcessSeller}>
                    작업 완료하기
                  </S.Btn2>
                </>
              ) : (
                <></>
              )}
              {send !== "1970-1-1" && completed === "1970-1-1" ? (
                <>
                  <S.AcceptBox>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      style={{ fontSize: "60px", marginRight: "10px" }}
                    />
                    확정 대기중
                  </S.AcceptBox>
                </>
              ) : (
                <></>
              )}
              {isAccept === "REFUSE" ? (
                <S.AcceptBox>
                  <S.Icon src="/reject.png" />
                  의뢰 거절
                </S.AcceptBox>
              ) : (
                <></>
              )}
              {completed !== "1970-1-1" ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    의뢰 확정 완료
                  </S.AcceptBox>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          <S.Box>
            <S.UserBox>
              <S.User>작업자</S.User>
              <S.UserPic src="/Ellipse 8" />
              <S.User>{data?.fetchOneRequest?.seller_nickname}</S.User>
              <S.UserEmail>{data?.fetchOneRequest?.seller_email}</S.UserEmail>
            </S.UserBox>
            <S.Between>
              <S.Arrow src="/Vector 3.png" />
              <S.Arrow src="/Vector 4.png" />
            </S.Between>
            <S.UserBox>
              <S.User>신청자</S.User>
              <S.UserPic src="/Ellipse 8 (1).png" />
              <S.User>{data?.fetchOneRequest?.buyer_nickname}</S.User>
              <S.UserEmail>{data?.fetchOneRequest?.buyer_email}</S.UserEmail>
            </S.UserBox>
          </S.Box>
        </S.Wrapper>
      </S.CommentBoxWrapper>
    </>
  );
}
