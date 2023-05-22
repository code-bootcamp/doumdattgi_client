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
import { useCreateProduct } from "../../commons/hooks/custom/useCreateProduct";
import ImageUpload from "../../commons/parts/imageUpload";
import { useRef, useState } from "react";
import Map from "../../commons/parts/map";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import { EditorInstance, EditorInstance2 } from "./index.types";

const Editor = dynamic(async () => await import("../../commons/parts/editor"), {
  ssr: false
});

interface IFormData {
  title: string;
  tags: string;
  remarks: string;
  contents: string;
  address: string;
  addressDetail: string;
  zonecode: string;
}

interface Address {
  address: string;
  zonecode: string;
}

interface IEditor {
  getInstance: any;
}

export default function BoardWritePresenter(props: any) {
  const [fileList, setFileList] = useState([]);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const {
    onClickWrite,
    selectedCategory,
    selectedOptions,
    setSelectedCategory,
    setSelectedOptions,
    selectedWorkDay,
    setSelectedWorkDay,
    selectedWorkTime,
    setSelectedWorkTime
  } = useCreateProduct();

  const editorRef = useRef<EditorInstance>(null);


  const { register, setValue, trigger, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaCreate)
  });
  const onChangeContents = (): void => {
    const editorInstance = editorRef.current?.getInstance() as EditorInstance2;
    const value = editorInstance?.getHTML();

    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣을 수 있다.
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // setValue로 넣은 값을 검증 요청 하는 법.
    void trigger("contents");
  };

  const onClickAddressSearch = (): void => {
    setIsOpen(prev => !prev);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <form onSubmit={wrapFormAsync(handleSubmit(onClickWrite))}>
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
                <CategorySelect
                  selectedCategory={selectedCategory}
                  selectedOptions={selectedOptions}
                  setSelectedCategory={setSelectedCategory}
                  setSelectedOptions={setSelectedOptions}
                />
              </S.InputBox>
              <S.InputBox>
                <S.Theme>
                  게시글 요약
                  <S.Required>*</S.Required>
                </S.Theme>
                <InputHeight38px register={register("summary")} />
              </S.InputBox>
            </S.Body_Top>
            <S.Body_Middle>
              <S.BoardContent>
                <S.Theme>
                  게시글 내용
                  <S.Required>*</S.Required>
                </S.Theme>
                <S.EditorBox>
                  <Editor
                    onChangeValue={onChangeContents}
                    editorRef={editorRef}
                  />
                </S.EditorBox>
              </S.BoardContent>
              <S.AvailableTime>
                <S.Theme>
                  작업 가능 시간
                  <S.Required>*</S.Required>
                </S.Theme>
                <S.SetTimeBox>
                  <WorkTimeDropBox 
                    selectedWorkDay={selectedWorkDay}
                    setSelectedWorkDay={setSelectedWorkDay}
                  />
                  <WorkingTimePicker
                    selectedWorkTime={selectedWorkTime}
                    setSelectedWorkTime={setSelectedWorkTime}
                  />
                </S.SetTimeBox>
              </S.AvailableTime>
              <S.AttachedImg>
                <S.Theme>
                  이미지 첨부
                  <S.Required>*</S.Required>
                </S.Theme>
                <S.Image>
                  <ImageUpload fileList={fileList} setFileList={setFileList} />
                </S.Image>
              </S.AttachedImg>
              <S.BoardAddress>
                <S.Theme>주소 입력</S.Theme>
                <S.AddressBox>
                  <S.MapBox>
                    <Map address={address} />
                  </S.MapBox>
                  <S.SearchBox>
                    <S.ZipcodeBox>
                      <InputHeight38px value={zonecode} disabled />
                      <S.SearchBtn onClick={onClickAddressSearch} type="button">
                        우편번호 검색
                      </S.SearchBtn>
                    </S.ZipcodeBox>
                    <InputHeight38px value={address} disabled />
                    <InputHeight38px />
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
        </form>
      </S.Wrapper>
    </>
  );
}

