import ButtonHeight70px from "../../commons/buttons/ButtonHeight70px";
import * as S from "./workAgreement.styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

export default function WorkAgreement(): JSX.Element {
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);

  const onClickAccept = (): void => {
    setIsAccept(true);
  };

  const onClickReject = (): void => {
    setIsReject(true);
  };

  return (
    <>
      <S.Wrapper>
        <S.Category>디자인</S.Category>
        <S.Title>게시글 제목</S.Title>
        <S.ProcessBox></S.ProcessBox>
        <S.ContentsDetail>신청 내용</S.ContentsDetail>
        <S.Contents>
          뚫고 지나가요 - Day6
          <br></br>
          <br></br>축 처진 그 어깨에 슬프다 써져 있길래 조심스레 괜찮냐 물어도
          대답은 침묵뿐이에요 힘이 되고 싶어, 뭔 짓을 해 봐도 안 보이나 봐요,
          눈앞에 있는데도 서서히 금이 가 깨질 것 같지만 그래도 난 버티고 있었죠
          이번만큼은 예상이 빗나가길 그리도 간절히 원했는데 왜?
          <br></br>
          <br></br>
          그냥 가라는 말 그대의 한마디가 나를 뚫고 지나가요 더 이상은 걷잡을 수
          없이 널 향한 맘 작은 조각들로 부서지고 흩어져요 여기가 내 사랑의
          끝이네요 So I guess now I've got to go 이렇게 떠나도 그대는 달라질 거
          하나 없죠 Oh, so I guess now there's no more us 그대가 필요한 건 내가
          아닌 거니까
          <br></br>
          <br></br>
          그대가 미워, 떠나려 해 봐도 안되더라고요 눈앞에 있으니까 서서히 금이
          가 깨질 걸 알아도 그래도 난 버티고 있었죠 이번만큼은 예상이 빗나가길
          그리도 간절히 원했는데 왜?
          <br></br>
          <br></br>
          그냥 가라는 말 그대의 한마디가 나를 뚫고 지나가요 더 이상은 걷잡을 수
          없이 널 향한 맘 작은 조각들로 부서지고 흩어져요 여기가 내 사랑의
          끝이네요 난 무너져 내리고 있는 이 순간에도 No, it's not easy to leave
          for good
          <br></br>
          <br></br>
          그냥 가라는 말 그대의 한마디가 나를 뚫고 지나가요 더 이상은 걷잡을 수
          없이 널 향한 맘 작은 조각들로 부서지고 흩어져요 여기가 내 사랑의
          끝이네요 So I guess now I've got to go 이렇게 떠나도 그대는 달라질 거
          하나 없죠 Oh, so I guess now theres no more us 그대가 필요한 건 내가
          아닌 거니까
        </S.Contents>
        <S.PaymentBox>
          <S.Price>9620</S.Price>
          <S.SpecialCharacter> x </S.SpecialCharacter>
          <S.Price>4</S.Price>
          <S.SpecialCharacter> = </S.SpecialCharacter>
          <S.SpecialCharacter> ₩ </S.SpecialCharacter>
          <S.Price>38,480</S.Price>
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
            <S.User>신청자 닉네임</S.User>
            <S.UserEmail>email@email.com</S.UserEmail>
          </S.UserBox>
          <S.Between>
            <S.Arrow src="/Vector 3.png" />
            <S.Arrow src="/Vector 4.png" />
          </S.Between>
          <S.UserBox>
            <S.User>작업자</S.User>
            <S.UserPic src="/Ellipse 8 (1).png" />
            <S.User>작업자 닉네임</S.User>
            <S.UserEmail>email@email.com</S.UserEmail>
          </S.UserBox>
        </S.Box>
      </S.Wrapper>
      ;
    </>
  );
}
