import Link from "next/link";
import * as S from "./style";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faWonSign } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Tag from "../../../commons/tag/category";
import StatusTag from "../../../commons/tag/status";
import { useQueryFetchSellCategoryProducts } from "../../../commons/hooks/queries/useQueryFetchSellCategoryProducts";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { ChangeEvent, useEffect, useState } from "react";
import { CategoryObj, CategoryObj2 } from "../../../../commons/libraries/translate";

const category = {
  list: [
    "전체",
    "IT・프로그래밍",
    "디자인",
    "번역・통역",
    "영상・방송",
    "마케팅",
    "문서・레포트"
  ],
  checked: "전체"
};

export default function SeekList() {
  const [categoryTitle, setCategoryTitle] = useState("");
  const { data, fetchMore, refetch } =
    useQueryFetchSellCategoryProducts(CategoryObj2[categoryTitle]);
  const { onClickMoveToPage } = useMoveToPage();

    //  결제내역 refetch
    useEffect(() => {
      refetch({
        product_category: CategoryObj2[categoryTitle] ?? "",
        page: 1,
        pageSize: 10
      });
    }, []);


  // 무한 스크롤 로직
  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page:
          Math.ceil((data?.fetchSellCategoryProducts?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchSellCategoryProducts === undefined) {
          return {
            fetchSellCategoryProducts: [...prev.fetchSellCategoryProducts]
          };
        }

        return {
          fetchSellCategoryProducts: [
            ...prev.fetchSellCategoryProducts,
            ...fetchMoreResult.fetchSellCategoryProducts
          ]
        };
      }
    });
  };

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryTitle(e.target.value);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.TitleBox>
            <S.SubTitle>원하는 서비스를 직접 의뢰해보세요!</S.SubTitle>
            <S.Title>사람을 구해요</S.Title>
          </S.TitleBox>
          <Link href={"/seek/create"}>
            <S.CreateLink>
              <S.CreateIcon src="/pencil.png" />새 구인글 작성하기
            </S.CreateLink>
          </Link>
        </S.Header>
        <S.Body>
          <S.CategoryWrap>
            <S.Category>카테고리</S.Category>
            {category.list.map(el => (
              <S.CategoryBox>
                <S.CategoryLabel>
                  <S.Radio
                    type="radio"
                    name="category"
                    defaultChecked={category.checked === el}
                    value={el}
                    onChange={onChangeCategory}
                  />
                  {el}
                </S.CategoryLabel>
              </S.CategoryBox>
            ))}
          </S.CategoryWrap>
          <S.ListWrap>
            <S.LengthBox>
              <S.LengthText>
                {data?.fetchSellCategoryProducts.length ?? 0}개의 서비스
              </S.LengthText>
              <Select
                defaultValue="최신순"
                style={{ width: 100 }}
                suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
                bordered={false}
                options={[
                  { value: "최신순", label: "최신순" },
                  { value: "인기순", label: "인기순" },
                  { value: "과거순", label: "과거순" }
                ]}
              />
            </S.LengthBox>
            <S.ContentsBox loadMore={onLoadMore} pageStart={0} hasMore={true}>
              {data?.fetchSellCategoryProducts?.map(el => (
                <S.ListBox
                  onClick={onClickMoveToPage(`/seek/${el?.product_product_id}`)}
                >
                  <StatusTag status={true} />
                  <S.ListTitle>{el?.product_product_title}</S.ListTitle>
                  <S.FlexBox>
                    <S.RequireBox>
                      <S.Icon icon={faWonSign} />
                      <S.DetailTitle>가능 금액</S.DetailTitle>
                      <S.DetailText>{el?.product_possibleAmount}</S.DetailText>
                    </S.RequireBox>
                    <S.RequireBox className="require">
                      <S.Icon icon={faClock} />
                      <S.DetailTitle>필요 날짜</S.DetailTitle>
                      <S.DetailText>{el?.product_date}</S.DetailText>
                    </S.RequireBox>
                  </S.FlexBox>
                  <S.TagBox>
                    <Tag data={el?.product_product_category} />
                    <S.Tag>
                      <Tag data={el?.product_product_category} />
                    </S.Tag>
                    <S.createdAt>
                      <S.Date>등록 일자</S.Date>
                      <S.Date>2023. 07. 01</S.Date>
                    </S.createdAt>
                  </S.TagBox>
                </S.ListBox>
              ))}
            </S.ContentsBox>
          </S.ListWrap>
        </S.Body>
      </S.Container>
    </S.Wrapper>
  );
}

