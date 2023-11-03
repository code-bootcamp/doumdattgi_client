import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Select, Space } from "antd";
import * as S from "./index.styles";
import Head from "next/head";
import UsePayment from "../../../hooks/custom/usePayment/Pay/index";
import { useQueryFetchLoginUser } from "../../../hooks/queries/useQueryFetchLoginUser";
import Script from "next/script";

export default function ChargeDropBox(): JSX.Element {
  const { SelectOption, isSelect, clickIniCis, amount, MenuArr, clickThis } =
    UsePayment();
  const { data } = useQueryFetchLoginUser();

  const userInfo = {
    email: data?.fetchLoginUser.user_email,
    name: data?.fetchLoginUser.user_name,
    phone: data?.fetchLoginUser.user_phone
  };

  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.Body className="ChargeBox">
        <S.Title>포인트 충전하기</S.Title>
        <Select
          defaultValue={"포인트를 선택해주세요."}
          style={{ marginRight: 5, width: "100%", height: "40px" }}
          size="large"
          onChange={clickThis}
          options={MenuArr.map(el => ({
            value: el,
            label: `${el} 원`
          }))}
        />
        <S.OptionBox>
          <S.Option>
            <input
              onChange={SelectOption}
              type="radio"
              name="payMethod"
              value="html5_inicis"
            />
            <S.PayMethod>이니시스</S.PayMethod>
          </S.Option>
          <S.Option>
            <input
              onChange={SelectOption}
              type="radio"
              name="payMethod"
              value="kakaopay"
            />
            <S.PayMethod>카카오</S.PayMethod>
          </S.Option>
        </S.OptionBox>
        <S.ChargeBtn
          disabled={amount === 0 || (!isSelect && true)}
          amount={String(amount)}
          isSelect={isSelect}
          onClick={clickIniCis(Number(amount), isSelect, { ...userInfo })}
        >
          충전하기
        </S.ChargeBtn>
      </S.Body>
    </>
  );
}
