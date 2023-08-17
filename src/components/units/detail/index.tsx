import {
  faSeedling,
  faBookmark as Bookmark2,
  faX
} from "@fortawesome/free-solid-svg-icons";
import Slider from "../../commons/parts/slider";
import * as S from "./styles";
import { faBookmark, faClock } from "@fortawesome/free-regular-svg-icons";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryFetchDetailProduct } from "../../commons/hooks/queries/useQueryFetchDetailProduct";
import PreviewContents from "../../commons/parts/main/previewContents";
import { useQueryFetchRandomProduct } from "../../commons/hooks/queries/useQueryFetchRandomProduct";
import DOMPurify from "dompurify";
import { Obj, CategoryObj } from "../../../commons/libraries/translate";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/useQueryFetchLoginUser";
import { useQueryFetchUserSlot } from "../../commons/hooks/queries/useQueryfetchUserSlot";
import { useUser } from "../../commons/hooks/custom/useUser/index";
import { useMutationcreatePick } from "../../commons/hooks/mutations/useMutationCreatePick";
import CardBox from "../../commons/parts/cardBox/col4";
import { useState } from "react";
import { IProduct } from "../../../commons/types/generated/types";
import {
  FETCH_PICK_OR_NOT,
  useQueryFetchPickOrNot
} from "../../commons/hooks/queries/useQueryFetchPickOrNot";
import { useMutationDeleteLoginProduct } from "../../commons/hooks/mutations/useMutationDeleteLoginProduct";
import { fallback } from "../../../commons/libraries/fallback";

export default function Detail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const id = String(router.query.id);
  const { data } = useQueryFetchDetailProduct(id);
  const { data: loginData } = useQueryFetchLoginUser();
  const { data: random } = useQueryFetchRandomProduct();
  const { data: slotData } = useQueryFetchUserSlot();
  const { data: pick } = useQueryFetchPickOrNot(String(router.query.id));
  const { imageSrc, userTitle } = useUser();
  // const [picked, setPicked] = useState(false);
  const [createPick] = useMutationcreatePick();
  const [deleteLoginProduct] = useMutationDeleteLoginProduct();

  // fetch 한 이미지들을 담은 배열
  const ImgArr = data?.fetchDetailProduct.images.map(el => el.image_url) ?? [];
  const workDay = data?.fetchDetailProduct.product_workDay;
  const Day = workDay && Obj[workDay];

  // 작성 글 ID와 로그인 유저 ID
  const writer = data?.fetchDetailProduct.user.user_id;
  const LoginUser = loginData?.fetchLoginUser.user_id;

  // 슬롯
  const slot1 = data?.fetchDetailProduct.user.slot.slot_first;
  const slot2 = data?.fetchDetailProduct.user.slot.slot_second;
  const slot3 = data?.fetchDetailProduct.user.slot.slot_third;

  // 최소금액
  const price = Number(data?.fetchDetailProduct?.product_minAmount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const clickPick = async () => {
    const result = await createPick({
      variables: { product_id: router.query.id as string },
      refetchQueries: [
        {
          query: FETCH_PICK_OR_NOT,
          variables: {
            product_id: router.query.id
          }
        }
      ]
    });
  };

  const clickDelete = async () => {
    try {
      await deleteLoginProduct({
        variables: {
          product_id: router.query.id as string
        }
      });
      alert("삭제가 완료되었습니다");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.SliderBox ImgArr={ImgArr}>
          <Slider ImgArr={ImgArr} />
        </S.SliderBox>
        <S.DetailWrap>
          <S.DetailBox>
            {/* <S.Category>
              {
                CategoryObj[
                  data?.fetchDetailProduct?.product_category ?? "DESIGN"
                ]
              }
            </S.Category> */}
            <S.TitleWrap>
              <S.Title>{data?.fetchDetailProduct.product_title}</S.Title>
              <S.IconBox>
                {pick?.fetchPickOrNot ? (
                  <S.Icon
                    onClick={clickPick}
                    icon={Bookmark2}
                    className="pick"
                  />
                ) : (
                  <S.Icon onClick={clickPick} icon={faBookmark} />
                )}
                {/* <S.Icon onClick={clickDelete} icon={faX} /> */}
              </S.IconBox>
            </S.TitleWrap>
            <S.TagWrap>
              <S.Tag>
                {
                  CategoryObj[
                    data?.fetchDetailProduct?.product_category ?? "DESIGN"
                  ]
                }
              </S.Tag>
              <S.Tag>{data?.fetchDetailProduct?.product_sub_category}</S.Tag>
            </S.TagWrap>
            <S.Price>{price} P ~</S.Price>
            <S.Remarks>{data?.fetchDetailProduct?.product_summary}</S.Remarks>
          </S.DetailBox>
          <S.DetailBox>
            <S.Button ImgArr={ImgArr}>
              {slot3 ? (
                <S.EnableBtn>현재 가능한 슬롯이 없습니다.</S.EnableBtn>
              ) : writer !== LoginUser || !writer || !LoginUser ? (
                <>
                  <S.DeleteBtn>
                    <Link href={`/${router.query.id}/request`}>
                      <a>
                        <S.LineBtn>신청서 작성하기</S.LineBtn>
                      </a>
                    </Link>
                  </S.DeleteBtn>
                  <Link href={`/${router.query.id}/request`}>
                    <a>
                      <ButtonHeight50px title="메세지 보내기" isActive={true} />
                    </a>
                  </Link>
                </>
              ) : (
                <>
                  <S.DeleteBtn>
                    <ButtonHeight50px
                      title="삭제하기"
                      isYou={true}
                      onClick={clickDelete}
                    />
                  </S.DeleteBtn>
                  <Link href={`/${router.query.id}/edit`}>
                    <a>
                      <ButtonHeight50px
                        title="수정하기"
                        isYou={true}
                        isActive={true}
                      />
                    </a>
                  </Link>
                </>
              )}
              <S.SlotBox>
                {writer === LoginUser ? (
                  <></>
                ) : slot3 ? (
                  <></>
                ) : (
                  <>
                    <S.SlotText>
                      현재 가능 슬롯 {!slot1 ? "3" : !slot2 ? "2" : "1"}개
                    </S.SlotText>
                    <S.SlotBg />
                  </>
                )}
              </S.SlotBox>
            </S.Button>
          </S.DetailBox>
        </S.DetailWrap>
      </S.Container>
      <S.DivideLine />
      <S.Container className="bottom">
        <S.DetailContentsWrap>
          <S.DetailTitle>상세 내용</S.DetailTitle>
          {typeof window !== "undefined" && (
            <S.DetailContents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(data?.fetchDetailProduct.product_main_text) ?? ""
                )
              }}
            />
          )}
        </S.DetailContentsWrap>
        <S.DetailUserWrap>
          <S.UserNameBox>
            <S.UserName>
              {data?.fetchDetailProduct.user.user_nickname === ""
                ? data?.fetchDetailProduct.user.user_email
                : data?.fetchDetailProduct.user.user_nickname}
            </S.UserName>
            <S.UserAvatar
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = fallback;
              }}
              src={data?.fetchDetailProduct.user?.user_profileImage ?? fallback}
            />
          </S.UserNameBox>

          <S.UserContainer>
            <S.UserTimeWrap>
              <S.TimeTitle>
                <S.TimeIcon icon={faClock} />
                <S.TimeText>연락 가능 시간</S.TimeText>
              </S.TimeTitle>
              <S.UserTimeBox>
                <S.UserTimeCategory>{Day}</S.UserTimeCategory>
                <S.UserTime>{`${String(
                  data?.fetchDetailProduct.product_startTime
                ).padStart(2, "0")}:00 ~ ${String(
                  data?.fetchDetailProduct.product_endTime
                ).padStart(2, "0")}:00`}</S.UserTime>
              </S.UserTimeBox>
            </S.UserTimeWrap>
            <S.UserWorkRateWrap>
              <S.UserWorkRateBox>
                <S.UserWorkRate>
                  {data?.fetchDetailProduct.user.user_workRate} 건
                </S.UserWorkRate>
                <S.UserWorkText>총 작업 수</S.UserWorkText>
              </S.UserWorkRateBox>
              <S.VerticalLine />
              <S.UserWorkRateBox>
                <S.UserLevelIcon src={imageSrc} />
                <S.UserWorkText>{userTitle}</S.UserWorkText>
              </S.UserWorkRateBox>
            </S.UserWorkRateWrap>
            <S.PortfolioTitleBox>
              <S.PortfolioIcon icon={faSeedling} />
              <S.PortfolioText>포트폴리오</S.PortfolioText>
            </S.PortfolioTitleBox>
            <S.PortfolioLink>
              {data?.fetchDetailProduct.user?.user_portfolio === ""
                ? "아직 등록한 포트폴리오 주소가 없습니다."
                : data?.fetchDetailProduct.user?.user_portfolio}
            </S.PortfolioLink>
            <S.UserIntroduceTitle>소개</S.UserIntroduceTitle>
            <S.UserIntroduce>
              {data?.fetchDetailProduct.user.user_introduce === ""
                ? "아직 등록한 소개가 없습니다."
                : data?.fetchDetailProduct.user.user_introduce}
            </S.UserIntroduce>
          </S.UserContainer>
        </S.DetailUserWrap>
      </S.Container>
      <S.DivideLine className="bottom" />
      <S.Subtitle>이런 게시글은 어떠세요?</S.Subtitle>
      <S.CardBoxWrap>
        {random?.fetchRandomProduct.map(el => (
          <CardBox key={el.product_product_id} data={el} />
        ))}
      </S.CardBoxWrap>
    </S.Wrapper>
  );
}
