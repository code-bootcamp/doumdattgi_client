import dynamic from "next/dynamic";
import * as S from "./index.styles";
import WorkingTimePicker from "../../commons/parts/Timepicker";
import WorkTimeDropBox from "../../commons/parts/Dropboxs/write";

// import { Editor } from "@toast-ui/react-editor";
const Editor = dynamic(() => import("../../commons/parts/Toasteditor/index"), {
  ssr: false
});

export default function BoardWritePresenter() {
  return (
    <>
      <S.Wrapper>
        <S.Head>
          <S.Title>게시글 작성하기</S.Title>
          <S.SelectToggle>
            <S.Employee>일을 구해요</S.Employee>
            <S.Employer>사람을 구해요</S.Employer>
          </S.SelectToggle>
        </S.Head>
        <S.Body>
          <S.Body_Top>
            <S.InputBox>
              <S.Theme>
                게시글 제목
                <S.Required>*</S.Required>
              </S.Theme>
              <S.Input01 />
            </S.InputBox>
            <S.InputBox>
              <S.Theme>
                카테고리 및 태그
                <S.Required>*</S.Required>
              </S.Theme>
              <S.Input01 />
            </S.InputBox>
            <S.InputBox>
              <S.Theme>
                게시글 요약
                <S.Required>*</S.Required>
              </S.Theme>
              <S.Input01 />
            </S.InputBox>
          </S.Body_Top>
          <S.Body_Middle>
            <S.BoardContent>
              <S.Theme>
                게시글 내용
                <S.Required>*</S.Required>
              </S.Theme>
              <S.EditorBox>
                <Editor />
              </S.EditorBox>
            </S.BoardContent>
            <S.AvailableTime>
              <S.Theme>
                작업 가능 시간
                <S.Required>*</S.Required>
              </S.Theme>
              <S.SetTimeBox>
                <WorkTimeDropBox />
                <WorkingTimePicker />
              </S.SetTimeBox>
            </S.AvailableTime>
            <S.AttachedImg>
              <S.Theme>
                이미지 첨부
                <S.Required>*</S.Required>
              </S.Theme>
              <img style={{ width: "150px", height: "150px" }} src="/IU.jpeg" />
            </S.AttachedImg>
            <S.BoardAddress>
              <S.Theme>주소 입력</S.Theme>
              <S.AddressBox>
                <img
                  style={{ width: "440px", height: "300px" }}
                  src="/IU.jpeg"
                />
                <S.SearchBox>
                  <S.ZipcodeBox>
                    <S.InputZipcode />
                    <S.SearchBtn>우편번호 검색</S.SearchBtn>
                  </S.ZipcodeBox>
                  <S.InputAddress />
                  <S.InputAddress />
                </S.SearchBox>
              </S.AddressBox>
            </S.BoardAddress>
          </S.Body_Middle>
          <S.Body_Bottom>
            <S.BtnBox>
              <S.CancelBtn>취소하기</S.CancelBtn>
              <S.CreateBtn>만들기</S.CreateBtn>
            </S.BtnBox>
          </S.Body_Bottom>
        </S.Body>
      </S.Wrapper>
      <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
    </>
  );
}
