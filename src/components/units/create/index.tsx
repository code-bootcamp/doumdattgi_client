import dynamic from "next/dynamic";
import * as S from "./index.styles";
import ImageUpload from "../../commons/parts/imageUpload";
import Category from "../../commons/parts/categorySelect";
import WorkDay from "../../commons/parts/workDay";
import TimePick from "../../commons/parts/Timepicker";
import { useCreateProduct2 } from "../../commons/hooks/custom/useCreateProduct/index";
import AddressModal from "../../commons/hooks/custom/useAddress";
import { IProps } from "./index.types";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import InputHeight40px from "../../commons/inputs/InputHeight40px";
import MetaTag from "../../../commons/libraries/metaTag";

const Editor = dynamic(async () => await import("../../commons/parts/editor"), {
  ssr: false
});

export default function CreateProduct(props: IProps) {
  const {
    data,

    editorRef,
    register,
    handleSubmit,
    formState,
    onChangeContents,
    onClickCreateProduct,
    onClickEditProduct,

    categoryArray,
    setCategoryArray,
    categorySelect,
    setCategorySelect,
    optionSelect,
    setOptionSelect,

    workDay,
    setWorkDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,

    fileList,
    setFileList,

    isModalOpen,
    setIsModalOpen,
    onClickAddressSearch,
    onCompleteAddressSearch,

    address,
    zipcode,

    isSubmitting,
    onChangeCategory,
    onChangeSubCategory,
    onChangeWorkTime,
    onChangeWorkDay,
    onChangeThumbnailImage
  } = useCreateProduct2(props.isEdit, props.sellOrBuy);

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <AddressModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onCompleteAddressSearch={onCompleteAddressSearch}
      />
      <MetaTag
        title={"새 서비스 만들기 | 나만의 포트폴리오"}
        description={"도움닫기에서 나만의 포트폴리오를 쌓아보세요."}
        imgsrc={`https://storage.googleapis.com/doumdattgi-storage/mainIcon.png`}
        keywords={"나만의 포트폴리오"}
        url={"https://doumdattgi.com"}
      />
      <S.Wrapper>
        <S.Container>
          <form
            onSubmit={
              props.isEdit
                ? handleSubmit(onClickEditProduct)
                : handleSubmit(onClickCreateProduct)
            }
          >
            <S.Head>
              <S.TitleBox>
                <S.SubTitle>재능을 발휘해 커리어를 발돋움 해보세요!</S.SubTitle>
                <S.Title>
                  {props.isEdit ? "서비스 수정하기" : "새 서비스 만들기"}
                </S.Title>
              </S.TitleBox>
            </S.Head>
            <S.Body>
              <S.Body_Top>
                <S.InputWrap>
                  <S.ThemeBox>
                    <S.Theme>
                      서비스 제목
                      <S.Required>*</S.Required>
                    </S.Theme>
                  </S.ThemeBox>
                  <S.InputBox>
                    <InputHeight40px
                      register={register("product_title")}
                      defaultValue={data?.fetchDetailProduct?.product_title}
                    />
                    <S.Error>{formState.errors.product_title?.message}</S.Error>
                  </S.InputBox>
                </S.InputWrap>
                <S.InputWrap>
                  <S.ThemeBox>
                    <S.Theme>
                      카테고리 및 태그
                      <S.Required>*</S.Required>
                    </S.Theme>
                  </S.ThemeBox>
                  <S.InputBox>
                    {props.isEdit && data && (
                      <Category
                        categoryArray={categoryArray}
                        setCategoryArray={setCategoryArray}
                        categorySelect={categorySelect}
                        setCategorySelect={setCategorySelect}
                        optionSelect={optionSelect}
                        setOptionSelect={setOptionSelect}
                        data={data?.fetchDetailProduct}
                        onChangeCategory={onChangeCategory}
                        onChangeSubCategory={onChangeSubCategory}
                      />
                    )}
                    {!props.isEdit && (
                      <Category
                        categoryArray={categoryArray}
                        setCategoryArray={setCategoryArray}
                        categorySelect={categorySelect}
                        setCategorySelect={setCategorySelect}
                        optionSelect={optionSelect}
                        setOptionSelect={setOptionSelect}
                        data={data?.fetchDetailProduct}
                        onChangeCategory={onChangeCategory}
                        onChangeSubCategory={onChangeSubCategory}
                      />
                    )}
                    <S.Error>
                      {formState.errors.product_category?.message ??
                        formState.errors.product_sub_category?.message}
                    </S.Error>
                  </S.InputBox>
                </S.InputWrap>
                <S.InputWrap>
                  <S.ThemeBox>
                    <S.Theme>
                      서비스 요약
                      <S.Required>*</S.Required>
                    </S.Theme>
                  </S.ThemeBox>
                  <S.InputBox>
                    <InputHeight40px
                      register={register("product_summary")}
                      defaultValue={
                        data?.fetchDetailProduct?.product_summary ?? ""
                      }
                    />
                    <S.Error>
                      {formState.errors.product_summary?.message}
                    </S.Error>
                  </S.InputBox>
                </S.InputWrap>
              </S.Body_Top>
              <S.PriceBox>
                <S.InputWrap>
                  <S.ThemeBox>
                    <S.Theme>
                      최소 신청 금액
                      <S.Required>*</S.Required>
                    </S.Theme>
                  </S.ThemeBox>
                  <S.InputBox className="short">
                    <InputHeight40px
                      register={register("product_minAmount")}
                      defaultValue={
                        data?.fetchDetailProduct?.product_minAmount ?? ""
                      }
                      placeholder="예) 10,000 P"
                    />
                    <S.Error>
                      {formState.errors.product_minAmount?.message}
                    </S.Error>
                  </S.InputBox>
                </S.InputWrap>
              </S.PriceBox>
              <S.Body_Middle>
                <S.BoardContent>
                  <S.Theme>
                    서비스 내용
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.EditorBox>
                    {props.isEdit && data && (
                      <Editor
                        onChangeValue={onChangeContents}
                        editorRef={editorRef}
                        data={data?.fetchDetailProduct?.product_main_text}
                      />
                    )}
                    {!props.isEdit && (
                      <Editor
                        onChangeValue={onChangeContents}
                        editorRef={editorRef}
                        data={data?.fetchDetailProduct?.product_main_text}
                      />
                    )}
                    <S.Error className="contents">
                      {formState.errors.product_main_text?.message}
                    </S.Error>
                  </S.EditorBox>
                </S.BoardContent>
                <S.AvailableTime>
                  <S.Theme>
                    연락 가능 시간
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.TimeWrap>
                    <S.TimeBox>
                      {props.isEdit && data && (
                        <>
                          <WorkDay
                            workDay={workDay}
                            setWorkDay={setWorkDay}
                            data={data?.fetchDetailProduct?.product_workDay}
                            onChangeWorkDay={onChangeWorkDay}
                          />
                          <TimePick
                            startTime={startTime}
                            setStartTime={setStartTime}
                            endTime={endTime}
                            setEndTime={setEndTime}
                            data={data?.fetchDetailProduct}
                            onChangeWorkTime={onChangeWorkTime}
                          />
                        </>
                      )}
                      {!props.isEdit && (
                        <>
                          <WorkDay
                            workDay={workDay}
                            setWorkDay={setWorkDay}
                            data={data?.fetchDetailProduct?.product_workDay}
                            onChangeWorkDay={onChangeWorkDay}
                          />
                          <TimePick
                            startTime={startTime}
                            setStartTime={setStartTime}
                            endTime={endTime}
                            setEndTime={setEndTime}
                            data={data?.fetchDetailProduct}
                            onChangeWorkTime={onChangeWorkTime}
                          />
                        </>
                      )}
                    </S.TimeBox>
                    <S.Error className="contents">
                      {formState.errors.product_startTime?.message}
                    </S.Error>
                  </S.TimeWrap>
                </S.AvailableTime>
                <S.AttachedImg>
                  <S.Theme>
                    이미지 첨부
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.Image>
                    <ImageUpload
                      fileList={fileList}
                      setFileList={setFileList}
                      data={data?.fetchDetailProduct?.images}
                      onChangeThumbnailImage={onChangeThumbnailImage}
                    />
                    <S.Error className="contents">
                      {formState.errors.product_thumbnailImage?.message}
                    </S.Error>
                  </S.Image>
                </S.AttachedImg>
              </S.Body_Middle>
              <S.Body_Bottom>
                <S.BtnBox>
                  <ButtonHeight50px
                    title="취소하기"
                    type="button"
                    onClick={onClickMoveToPage("/mypage/profile")}
                  />
                </S.BtnBox>
                <S.BtnBox>
                  <ButtonHeight50px
                    title="만들기"
                    isActive={formState.isValid}
                    disabled={isSubmitting}
                  />
                </S.BtnBox>
              </S.Body_Bottom>
            </S.Body>
          </form>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
