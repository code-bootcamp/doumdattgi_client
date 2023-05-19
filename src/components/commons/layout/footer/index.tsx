import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 360px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #bdbdbd;
  background-color: #fafafa;
  margin-top: 130px;
`;
const BottomInfo = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 60px 0px;
`;
const CompanyInfo = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <BottomInfo>
        <CompanyInfo>
          <span>도움닫기</span>
          <span>© 2023 Project Doumdattgi Corp. Copy</span>
          <span>서울특별시 구로구 디지털로 300 지밸리플라자 13층</span>
        </CompanyInfo>
        <span>이용약관 | 개인정보처리방침</span>
      </BottomInfo>
    </Wrapper>
  );
}
