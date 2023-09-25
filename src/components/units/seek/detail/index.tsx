import { faClock } from "@fortawesome/free-regular-svg-icons";
import ButtonHeight50px from "../../../commons/buttons/ButtonHeight50px";
import Tag from "../../../commons/tag/category";
import StatusTag from "../../../commons/tag/status";
import * as S from "./style";
import { faLocationDot, faWon } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";
import { fallback } from "../../../../commons/libraries/fallback";
import Link from "next/link";
import Map from "../../../commons/parts/map";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchDetailProduct } from "../../../commons/hooks/queries/useQueryFetchDetailProduct";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";
import { useMutationDeleteLoginProduct } from "../../../commons/hooks/mutations/useMutationDeleteLoginProduct";

export default function SeekDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQueryFetchDetailProduct(String(router.query.id));
  const { data: loginData } = useQueryFetchLoginUser();

  const [deleteLoginProduct] = useMutationDeleteLoginProduct();

  // 작성 글 ID와 로그인 유저 ID
  const writer = data?.fetchDetailProduct.user.user_id;
  const LoginUser = loginData?.fetchLoginUser.user_id;

  const clickDelete = async () => {
    try {
      await deleteLoginProduct({
        variables: {
          product_id: router.query.id as string
        }
      });
      alert("삭제가 완료되었습니다");
      router.push("/seek/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentsWrap>
          <S.TitleWrap>
            <S.StatusBox>
              <StatusTag status={true} />
              <S.DateBox>
                <S.Date>등록 일자</S.Date>
                <S.Date>2023. 07. 01</S.Date>
              </S.DateBox>
            </S.StatusBox>
            <S.Title>{data?.fetchDetailProduct?.product_title}</S.Title>
            <S.CategoryBox>
              <Tag data={data?.fetchDetailProduct?.product_category ?? ""} />
              <S.Tag>
                <Tag
                  data={data?.fetchDetailProduct?.product_sub_category ?? ""}
                />
              </S.Tag>
            </S.CategoryBox>
          </S.TitleWrap>
          <S.DivideLine />
          <S.RequireWrap>
            <S.RequireBox>
              <S.RequireTitleBox>
                <S.Icon icon={faWon} />
                <S.RequireTitle>가능 금액</S.RequireTitle>
              </S.RequireTitleBox>
              <S.RequireContents>
                {data?.fetchDetailProduct?.product_possibleAmount}
              </S.RequireContents>
            </S.RequireBox>
            <S.RequireBox>
              <S.RequireTitleBox>
                <S.Icon icon={faClock} />
                <S.RequireTitle>필요 날짜</S.RequireTitle>
              </S.RequireTitleBox>
              <S.RequireContents>
                {data?.fetchDetailProduct?.product_date}
              </S.RequireContents>
            </S.RequireBox>
          </S.RequireWrap>
          <S.DivideLine />
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
          {data && data?.fetchDetailProduct?.product_roadAddress && (
            <S.DetailMapWrap>
              <S.RequireTitleBox>
                <S.Icon icon={faLocationDot} />
                <S.RequireTitle>희망 지역</S.RequireTitle>
              </S.RequireTitleBox>
              <S.MapAddress>
                {data?.fetchDetailProduct?.product_roadAddress}
              </S.MapAddress>
              <S.MapBox>
                <Map address={data?.fetchDetailProduct?.product_roadAddress} />
              </S.MapBox>
            </S.DetailMapWrap>
          )}
          <S.DivideLine />
          <S.ButtonWrap>
            {writer === LoginUser && (
              <>
                <S.ButtonBox className="delete">
                  <ButtonHeight50px
                    title="삭제하기"
                    isYou={true}
                    onClick={clickDelete}
                  />
                </S.ButtonBox>
                <S.ButtonBox>
                  <ButtonHeight50px
                    title="수정하기"
                    isActive={true}
                    onClick={onClickMoveToPage(`/seek/${router.query.id}/edit`)}
                  />
                </S.ButtonBox>
              </>
            )}
            {writer !== LoginUser && (
              <S.ButtonBox>
                <ButtonHeight50px title="지원하기" isActive={true} />
              </S.ButtonBox>
            )}
          </S.ButtonWrap>
          <S.DivideLine />
          <S.ListWrap>
            <S.ListTitleWrap>
              <S.ListTitleBox>
                <S.DetailTitle>지원 목록</S.DetailTitle>
                <S.ListTitleDesc>0개의 지원이 들어왔어요.</S.ListTitleDesc>
              </S.ListTitleBox>
              <S.UnderLineBtn>지원 마감하기</S.UnderLineBtn>
            </S.ListTitleWrap>
            <S.ListBox>
              <S.ListItem>
                <S.ListUserWrap>
                  <S.ListUserIcon
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallback;
                    }}
                    src={fallback}
                  />
                  <S.ListUserBox>
                    <S.ListUserNameBox>
                      <S.ListUserName>지원자 닉네임</S.ListUserName>
                      <S.ListCreatedAt>2023. 07. 01</S.ListCreatedAt>
                    </S.ListUserNameBox>
                    <S.ListContent>안녕하세요~ 지원합니다.</S.ListContent>
                  </S.ListUserBox>
                </S.ListUserWrap>
                <S.ListBtn>메세지하기</S.ListBtn>
              </S.ListItem>
            </S.ListBox>
          </S.ListWrap>
        </S.ContentsWrap>
        <S.UserWrap>
          <S.UserBox>
            <S.UserIcon
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = fallback;
              }}
              src={
                data?.fetchDetailProduct?.user?.user_profileImage ?? fallback
              }
            />
            <S.UserName>
              {data?.fetchDetailProduct?.user?.user_nickname}
            </S.UserName>
          </S.UserBox>
          <S.CreateBox>
            <S.CreateText>원하는 서비스를 직접 의뢰해보세요!</S.CreateText>
            <Link href={"/seek/create"}>
              <S.CreateLink>
                <S.CreateIcon src="/pencil.png" />새 구인글 작성하기
              </S.CreateLink>
            </Link>
          </S.CreateBox>
        </S.UserWrap>
      </S.Container>
    </S.Wrapper>
  );
}
