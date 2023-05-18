import dynamic from "next/dynamic";
import * as S from "./index.styles";
import WorkingTimePicker from "../../commons/parts/Timepicker";
import WorkTimeDropBox from "../../commons/parts/Dropboxs/write";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreate } from "../../../commons/libraries/schema";
import CategorySelect from "../../commons/parts/categorySelect/index";
import InputHeight38px from "../../commons/inputs/InputHeight38px";
import ButtonHeight40px from "../../commons/buttons/ButtonHeight40px";
import { useBoard } from "../../commons/hooks/custom/useCreateBoard/index";

const Editor = dynamic(
  async () => await import("../../commons/parts/Toasteditor/index"),
  {
    ssr: false
  }
);

interface IFormData {
  title: string;
  tags: string;
  remarks: string;
  contents: string;
  address: string;
  addressDetail: string;
  zipcode: string;
}

export default function BoardWritePresenter() {
  const { onClickWrite } = useBoard();

  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(schemaCreate),
      mode: "onChange"
    });

  const onChangeContents = (value: string): void => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickWrite)}>
        <S.Wrapper>
          <S.Head>
            <S.Title>게시글 작성하기</S.Title>
            <S.SelectToggle>
              <S.Employee>일을 구해요</S.Employee>
              <S.DivideLine />
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
                <InputHeight38px register={register("title")} />
              </S.InputBox>
              <S.InputBox>
                <S.Theme>
                  카테고리 및 태그
                  <S.Required>*</S.Required>
                </S.Theme>
                <CategorySelect />
              </S.InputBox>
              <S.InputBox>
                <S.Theme>
                  게시글 요약
                  <S.Required>*</S.Required>
                </S.Theme>
                <InputHeight38px register={register("remarks")} />
              </S.InputBox>
            </S.Body_Top>
            <S.Body_Middle>
              <S.BoardContent>
                <S.Theme>
                  게시글 내용
                  <S.Required>*</S.Required>
                </S.Theme>
                <S.EditorBox>
                  <Editor onChange={onChangeContents} />
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
                <img
                  style={{ width: "150px", height: "150px" }}
                  src="/IU.jpeg"
                />
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
                      <InputHeight38px />
                      <S.SearchBtn>우편번호 검색</S.SearchBtn>
                    </S.ZipcodeBox>
                    <InputHeight38px />
                    <InputHeight38px register={register("addressDetail")} />
                  </S.SearchBox>
                </S.AddressBox>
              </S.BoardAddress>
            </S.Body_Middle>
            <S.Body_Bottom>
              <S.BtnBox>
                <ButtonHeight40px title="취소하기" />
                <S.Between />
                <ButtonHeight40px title="만들기" isActive={formState.isValid} />
              </S.BtnBox>
            </S.Body_Bottom>
          </S.Body>
        </S.Wrapper>
      </form>
      <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
    </>
  );
}
