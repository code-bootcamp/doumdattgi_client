import ButtonHeight70px from "../../commons/buttons/ButtonHeight70px";
import * as S from "./workAgreement.styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import CommentDrawer from "../../commons/parts/commentDrawer";
import { useQueryFetchOneRequest } from "../../commons/hooks/queries/useQueryFetchOneRequest";

export default function WorkAgreement(): JSX.Element {
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);

  const { data } = useQueryFetchOneRequest();

  const onClickAccept = (): void => {
    setIsAccept(true);
  };

  const onClickReject = (): void => {
    setIsReject(true);
  };

  // const time = Number(data.request_price) / 9620;

  return (
    <>
      <S.CommentBoxWrapper>
        <CommentDrawer />
        <S.Wrapper>
          <S.Category>{/* data.isAccept */}</S.Category>
          <S.Title>{/* data.request_title */}</S.Title>
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
          <S.Contents>{/* data.request_content */}</S.Contents>
          <S.PaymentBox>
            <S.Price>9620</S.Price>
            <S.SpecialCharacter> x </S.SpecialCharacter>
            <S.Price>{/* time */}</S.Price>
            <S.SpecialCharacter> = </S.SpecialCharacter>
            <S.SpecialCharacter> ₩ </S.SpecialCharacter>
            <S.Price>{/* data.request_price */}</S.Price>
          </S.PaymentBox>
          {/* 작업자인지 신청자인지에 따라 분기 예정 */}
          <S.Box>
            <S.AcceptBox>
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                style={{ fontSize: "60px", marginRight: "10px" }}
              />
              수락 대기중
            </S.AcceptBox>
          </S.Box>
          {/* 이 사이에서 분기가 이루어져야함!!!*/}
          <S.Box>
            {isAccept ? (
              <>
                <S.AcceptBox>
                  <S.Icon src="/accept.png" />
                  의뢰 수락
                </S.AcceptBox>
              </>
            ) : isReject ? (
              <>
                <S.AcceptBox>
                  <S.Icon src="/reject.png" />
                  의뢰 거절
                </S.AcceptBox>
              </>
            ) : (
              <>
                <ButtonHeight70px title="거절하기" onClick={onClickReject} />
                <S.Between></S.Between>
                <ButtonHeight70px title="수락하기" onClick={onClickAccept} />
              </>
            )}
          </S.Box>
          <S.Box>
            <S.UserBox>
              <S.User>신청자</S.User>
              <S.UserPic src="/Ellipse 8.png" />
              <S.User>{/* data.seller_nickname */}</S.User>
              <S.UserEmail>{/* data.seller_id */}</S.UserEmail>
            </S.UserBox>
            <S.Between>
              <S.Arrow src="/Vector 3.png" />
              <S.Arrow src="/Vector 4.png" />
            </S.Between>
            <S.UserBox>
              <S.User>작업자</S.User>
              <S.UserPic src="/Ellipse 8 (1).png" />
              <S.User>{/* data.buyer_nickname */}</S.User>
              <S.UserEmail>{/* data.buyer_id */}</S.UserEmail>
            </S.UserBox>
          </S.Box>
        </S.Wrapper>
      </S.CommentBoxWrapper>
    </>
  );
}
