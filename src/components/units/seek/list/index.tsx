import Link from "next/link";
import * as S from "./style";
import { ConfigProvider, Select, Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faWonSign } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Tag from "../../../commons/tag/category";
import StatusTag from "../../../commons/tag/status";
import { useQueryFetchSellCategoryProducts } from "../../../commons/hooks/queries/useQueryFetchSellCategoryProducts";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useEffect, useState } from "react";
import { CategoryObj2 } from "../../../../commons/libraries/translate";
import { getDate2 } from "../../../../commons/libraries/getDate";
import MetaTag from "../../../../commons/libraries/metaTag";
import { useRouter } from "next/router";

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
  const [isRecent, setIsRecent] = useState(true);
  const { data, fetchMore, refetch } = useQueryFetchSellCategoryProducts(
    CategoryObj2[categoryTitle]
  );
  const { onClickMoveToPage } = useMoveToPage();

  const RecentOrNot = (value: string) => {
    if (value === "최신순") {
      setIsRecent(true);
    } else if (value === "과거순") {
      setIsRecent(false);
    }
  };

  // 카테고리 최신순, 과거순 정렬
  const categoryList = !isRecent
    ? data?.fetchSellCategoryProducts.slice().reverse() || []
    : data?.fetchSellCategoryProducts || [];

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

  const router = useRouter();

  const clickCategory = (data: string) => () => {
    setCategoryTitle(data);
    router.push({
      pathname: "/seek",
      query: { data }
    });
  };
  const clickCategory2 = (data: string) => {
    setCategoryTitle(data);
    router.push({
      pathname: "/seek",
      query: { data }
    });
  };

  return (
    <>
      <MetaTag
        title={"검색 | 도움닫기"}
        description={"도움닫기에서 나만의 포트폴리오를 쌓아보세요."}
        imgsrc={`https://storage.googleapis.com/doumdattgi-storage/mainIcon.png`}
        keywords={"나만의 포트폴리오"}
        url={"https://doumdattgi.com"}
      />
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.TitleBox>
              <S.SubTitle>원하는 서비스를 직접 의뢰해보세요!</S.SubTitle>
              <S.Title>사람을 구해요</S.Title>
            </S.TitleBox>
            <Link href={"/seek/create"}>
              <S.CreateLink>
                <S.CreateIcon src="/pencil.png" />새 구인글 올리기
              </S.CreateLink>
            </Link>
          </S.Header>
          <S.MobileCategoryWrap>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#88b04b"
                }
              }}
            >
              <Tabs
                activeKey={
                  router.query.data ? `${router.query.data}` : category.list[0]
                }
                items={category.list.map(el => ({
                  key: el,
                  label: el
                }))}
                onChange={clickCategory2}
              />
            </ConfigProvider>
          </S.MobileCategoryWrap>
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
                      onChange={clickCategory(el)}
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
                    { value: "과거순", label: "과거순" }
                  ]}
                  onChange={RecentOrNot}
                />
              </S.LengthBox>
              <S.ContentsBox loadMore={onLoadMore} pageStart={0} hasMore={true}>
                {categoryList?.map(el => (
                  <S.ListBox>
                    <StatusTag status={true} />
                    <S.ListTitle
                      onClick={onClickMoveToPage(
                        `/seek/${el?.product_product_id}`
                      )}
                    >
                      {el?.product_product_title}
                    </S.ListTitle>
                    <S.FlexBox>
                      <S.RequireBox
                        onClick={onClickMoveToPage(
                          `/seek/${el?.product_product_id}`
                        )}
                      >
                        <S.Icon icon={faWonSign} />
                        <S.DetailTitle>가능 금액</S.DetailTitle>
                        <S.DetailText>
                          {el?.product_product_possibleAmount}
                        </S.DetailText>
                      </S.RequireBox>
                      <S.RequireBox className="require">
                        <S.Icon icon={faClock} />
                        <S.DetailTitle>필요 날짜</S.DetailTitle>
                        <S.DetailText>{el?.product_product_date}</S.DetailText>
                      </S.RequireBox>
                    </S.FlexBox>
                    <S.TagBox
                      onClick={onClickMoveToPage(
                        `/seek/${el?.product_product_id}`
                      )}
                    >
                      <Tag data={el?.product_product_category} />
                      <S.Tag>
                        <Tag data={el?.product_product_sub_category} />
                      </S.Tag>
                      <S.createdAt>
                        <S.Date>등록 일자</S.Date>
                        <S.Date>
                          {getDate2(el?.product_product_createdAt)}
                        </S.Date>
                      </S.createdAt>
                    </S.TagBox>
                  </S.ListBox>
                ))}
              </S.ContentsBox>
            </S.ListWrap>
          </S.Body>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
