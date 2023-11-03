import * as S from "./style";
import CardBox from "../../cardBox/mileage";
import { useQueryFetchRandomMileageProduct } from "../../../hooks/queries/useQueryfetchRandomMileageProduct";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface MileageListProps {
  isAll: boolean;
}

export default function MileageWrap(props: MileageListProps): JSX.Element {
  const { data, refetch } = useQueryFetchRandomMileageProduct();
  const router = useRouter();

  useEffect(() => {
    refetch();
  }, [router.asPath]);

  return (
    <S.MileageWrap>
      <S.MileageTitleBox>
        <S.MileageTitle>특별한 서비스들</S.MileageTitle>
        <S.MileageSubTitle>마일리지 전용 영역</S.MileageSubTitle>
      </S.MileageTitleBox>
      <S.MileageBox isAll={props.isAll}>
        {data?.fetchRandomMileageProduct.map(el => (
          <CardBox key={el.product_id} data={el} />
        ))}
      </S.MileageBox>
    </S.MileageWrap>
  );
}
