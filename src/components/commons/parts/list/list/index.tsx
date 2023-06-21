import * as S from "./style";
import { useRouter } from "next/router";
import Link from "next/link";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQueryfetchSubCategoryProduct } from "../../../hooks/queries/useQueryFetchSubCategoryProduct";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import CardBox from "../../cardBox/col4";
import { useQueryFetchCategoryProduct } from "../../../hooks/queries/useQueryFetchCategoryProduct";
import ListCardBox from "../../cardBox/list";
import { useEffect, useState } from "react";
import { IFetchProductOutput } from "../../../../../commons/types/generated/types";

export default function ProductList() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  // router 들어가는 값 타입지정 (타입이 배열일 가능성)
  const category = Array.isArray(router.query.data)
    ? router.query.data[0]
    : router.query.data || "";

  const { data, fetchMore, refetch } = useQueryFetchCategoryProduct(category);

  useEffect(() => {
    refetch({
      product_category: category,
      page: 1,
      pageSize: 10
    });

    console.log("카테고리 리페치");
  }, [router.query.data]);

  // 카테고리 최신순, 과거순 정렬
  const [isRecent, setIsRecent] = useState(true);
  const categoryList = !isRecent
    ? [...(data?.fetchCategoryProduct || [])].reverse()
    : data?.fetchCategoryProduct;

  const RecentOrNot = (value: string) => {
    if (value === "최신순") {
      setIsRecent(true);
    } else if (value === "과거순") {
      setIsRecent(false);
    }
  };

  // 조회용 카테고리 Key값
  const CategoryTitle =
    data?.fetchCategoryProduct?.[0]?.product_product_category;

  // 무한 스크롤 로직
  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchCategoryProduct?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchCategoryProduct === undefined) {
          return {
            fetchCategoryProduct: [...prev.fetchCategoryProduct]
          };
        }

        return {
          fetchCategoryProduct: [
            ...prev.fetchCategoryProduct,
            ...fetchMoreResult.fetchCategoryProduct
          ]
        };
      }
    });
  };

  return (
    <S.Container>
      <S.CategoryBox>
        <Link href="/categoryList/all">
          <S.CategoryTag>홈</S.CategoryTag>
        </Link>
        <S.AngleRight icon={faAngleRight} />
        <S.CategoryTag>{CategoryObj[CategoryTitle ?? category]}</S.CategoryTag>
        <S.AngleRight icon={faAngleRight} />
        {/* <S.CategoryTag>{Sub}</S.CategoryTag> */}
      </S.CategoryBox>
      <S.LengthBox>
        <S.LengthText>
          {data?.fetchCategoryProduct?.length}개의 서비스
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
          onChange={RecentOrNot}
        />
      </S.LengthBox>
      <S.ContentsBox loadMore={onLoadMore} pageStart={0} hasMore={true}>
        <>
          {categoryList?.map(el => (
            <ListCardBox key={el.product_product_id} data={el} />
          ))}
        </>
      </S.ContentsBox>
    </S.Container>
  );
}
