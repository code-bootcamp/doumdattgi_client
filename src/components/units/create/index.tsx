import dynamic from "next/dynamic";
import * as S from "./index.styles";
import WorkingTimePicker from "../../commons/parts/Timepicker";
import WorkTimeDropBox from "../../commons/parts/Dropboxs/write";
import CategorySelect from "../../commons/parts/categorySelect/index";
import InputHeight38px from "../../commons/inputs/InputHeight38px";
import ButtonHeight40px from "../../commons/buttons/ButtonHeight40px";
import { useCreateProduct } from "../../commons/hooks/custom/useCreateProduct";
import ImageUpload from "../../commons/parts/imageUpload";
import Map from "../../commons/parts/map";
import { wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import AddressModal from "../../commons/hooks/custom/useAddress";
import { useQueryFetchDetailProduct } from "../../commons/hooks/queries/useQueryFetchDetailProduct";
import { useRouter } from "next/router";

const Editor = dynamic(async () => await import("../../commons/parts/editor"), {
  ssr: false
});

export default function BoardWritePresenter(props: any) {

  const {
    onClickWrite,
    selectedCategory,
    selectedOptions,
    setSelectedCategory,
    setSelectedOptions,
    selectedWorkDay,
    setSelectedWorkDay,
    selectedWorkTime,
    setSelectedWorkTime,
    fileList,
    setFileList,
    register,
    handleSubmit,
    editorRef,
    onChangeContents,
    isModalOpen,
    setIsModalOpen,
    address,
    setAddress,
    zipcode,
    setZipcode,
    formState,
    clickEmployee,
    clickEmployer,
    isToggle,
    onClickAddressSearch,
  } = useCreateProduct();

  const router = useRouter()
  const { data } = useQueryFetchDetailProduct(String(router.query.id));
  console.log(data?.fetchDetailProduct)

  return (
    <>
    <AddressModal setAddress={setAddress} setZipcode={setZipcode} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <S.Wrapper>
        <form onSubmit={wrapFormAsync(handleSubmit(onClickWrite))}>
          <S.Head>
            <S.Title>{props.isEdit ? "게시글 수정하기" : "게시글 작성하기"}</S.Title>
            <S.SelectToggle>
              <S.Employee onClick={clickEmployee} isToggle={isToggle}>
                일을 구해요
              </S.Employee>
              <S.DivideLine />
              <S.Employer onClick={clickEmployer} isToggle={isToggle}>
                사람을 구해요
              </S.Employer>
            </S.SelectToggle>
          </S.Head>
          <S.Body>
            <S.Body_Top>
              <S.InputBox>
                <S.Theme>
                  게시글 제목
                  <S.Required>*</S.Required>
                </S.Theme>
                <S.Input {...register("title")} defaultValue={data?.fetchDetailProduct?.product_title}/>
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
                  data={data}
                />
              </S.InputBox>
              <S.InputBox>
                <S.Theme>
                  게시글 요약
                  <S.Required>*</S.Required>
                </S.Theme>
                <S.Input {...register("summary")} defaultValue={data?.fetchDetailProduct?.product_summary}/>
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
                    data={data?.fetchDetailProduct?.product_main_text}
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
                  <ImageUpload fileList={fileList} setFileList={setFileList} data={data?.fetchDetailProduct?.images}/>
                </S.Image>
              </S.AttachedImg>
              <S.BoardAddress>
                <S.Theme>주소 입력</S.Theme>
                <S.AddressBox>
                  <S.MapBox>
                    <Map address={address !== "" ? address : data?.fetchDetailProduct?.product_roadAddress} />
                  </S.MapBox>
                  <S.SearchBox>
                    <S.ZipcodeBox>
                      <InputHeight38px value={zipcode !== "" ? zipcode : data?.fetchDetailProduct?.product_postNum} disabled />
                      <S.SearchBtn onClick={onClickAddressSearch} type="button">
                        우편번호 검색
                      </S.SearchBtn>
                    </S.ZipcodeBox>
                    <InputHeight38px value={address !== "" ? address : data?.fetchDetailProduct?.product_roadAddress} disabled />
                    <S.Input {...register("product_detailAddress")} defaultValue={data?.fetchDetailProduct?.product_detailAddress}/>
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
