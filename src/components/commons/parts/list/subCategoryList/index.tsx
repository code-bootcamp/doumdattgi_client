import * as S from "./index.styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQueryfetchSubCategoryProduct } from "../../../hooks/queries/useQueryFetchSubCategoryProduct";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import CardBox from "../../cardBox/card";
import { IFetchProductOutput } from "../../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
import { useQueryFetchRandomMileageProduct } from "../../../hooks/queries/useQueryfetchRandomMileageProduct";
import MileageWrap from "../mileage";

interface IProps {
  data: IFetchProductOutput;
}

export default function SubProductList() {
  const router = useRouter();

  const BigCategory = Array.isArray(router.query.data)
    ? router.query.data[0]
    : router.query.data || "";

  const Sub = Array.isArray(router.query.sub)
    ? router.query.sub[0]
    : router.query.sub || "";

  const { data, fetchMore } = useQueryfetchSubCategoryProduct(Sub);
  const { data: mileageProductData } = useQueryFetchRandomMileageProduct();

  const length = data?.fetchSubCategoryProduct.length;

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchSubCategoryProduct?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchSubCategoryProduct === undefined) {
          return {
            fetchSubCategoryProduct: [...prev.fetchSubCategoryProduct]
          };
        }

        return {
          fetchSubCategoryProduct: [
            ...prev.fetchSubCategoryProduct,
            ...fetchMoreResult.fetchSubCategoryProduct
          ]
        };
      }
    });
  };
  return (
    <S.Container>
      <MileageWrap isAll={false} />
      <S.CategoryBox>
        <Link href="/categoryList/all">
          <S.CategoryTag>홈</S.CategoryTag>
        </Link>
        <S.AngleRight icon={faAngleRight} />
        <S.CategoryTag>{CategoryObj[BigCategory]}</S.CategoryTag>
        <S.AngleRight icon={faAngleRight} />
        <S.CategoryTag>{Sub}</S.CategoryTag>
      </S.CategoryBox>
      <S.LengthBox>
        <S.LengthText>
          {data?.fetchSubCategoryProduct?.length ?? 0}개의 서비스
        </S.LengthText>
        <Select
          defaultValue="최신순"
          style={{ width: 100 }}
          bordered={false}
          suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
          options={[
            { value: "최신순", label: "최신순" },
            { value: "인기순", label: "인기순" },
            { value: "과거순", label: "과거순" }
          ]}
        />
      </S.LengthBox>
      <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
        <S.ContentsWrap>
          <S.ContentsBox>
            {data?.fetchSubCategoryProduct.map(el => (
              <CardBox data={el} key={el?.product_product_id} />
            ))}
          </S.ContentsBox>
        </S.ContentsWrap>
      </InfiniteScroll>
    </S.Container>
  );
}
