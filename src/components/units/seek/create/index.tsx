import { useRouter } from "next/router";
import AddressModal from "../../../commons/hooks/custom/useAddress";
import { useCreateProduct2 } from "../../../commons/hooks/custom/useCreateProduct/index2";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import * as S from "./style";
import InputHeight40px from "../../../commons/inputs/InputHeight40px";
import dynamic from "next/dynamic";
import ButtonHeight50px from "../../../commons/buttons/ButtonHeight50px";
import Category2 from "../../../commons/parts/categorySelect/index2";
import InputHeight38px from "../../../commons/inputs/InputHeight38px";
import Map from "../../../commons/parts/map";
import { DatePicker } from "antd";

const Editor = dynamic(
  async () => await import("../../../commons/parts/editor"),
  {
    ssr: false
  }
);

export default function SeekCreate(props) {
  const {
    data,

    isToggle,
    clickEmployee,
    clickEmployer,

    editorRef,
    register,
    handleSubmit,
    formState,
    onChangeContents,
    onClickCreateProduct,
    onClickEditProduct,
    onClickCreateSeek,

    categoryArray,
    setCategoryArray,
    categorySelect,
    setCategorySelect,
    optionSelect,
    setOptionSelect,

    isModalOpen,
    setIsModalOpen,
    onClickAddressSearch,
    onCompleteAddressSearch,

    address,
    zipcode,

    disabledPossibleAmount,
    disabledDate,

    isSubmitting,
    onChangeCategory,
    onChangeSubCategory,
    onChangePossibleAmount,
    onChangeDate,
    onChangeDatePicker
  } = useCreateProduct2(props.isEdit, props.sellOrBuy);

  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  return (
    <>
      <AddressModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onCompleteAddressSearch={onCompleteAddressSearch}
      />
      <S.Wrapper>
        <S.Container>
          <form
            onSubmit={
              props.isEdit
                ? handleSubmit(onClickEditProduct)
                : handleSubmit(onClickCreateSeek)
            }
          >
            <S.Head>
              <S.TitleBox>
                <S.SubTitle>원하는 서비스를 직접 의뢰해보세요!</S.SubTitle>
                <S.Title>
                  {props.isEdit ? "구인글 수정하기" : "새 구인글 올리기"}
                </S.Title>
              </S.TitleBox>
            </S.Head>
            <S.Body>
              <S.Body_Top>
                <S.InputWrap>
                  <S.ThemeBox>
                    <S.Theme>
                      구인글 제목
                      <S.Required>*</S.Required>
                    </S.Theme>
                  </S.ThemeBox>
                  <S.InputBox>
                    <InputHeight40px
                      register={register("product_title")}
                      defaultValue={data?.fetchDetailProduct?.product_title}
                    />
                    {/* <S.Input
                          {...register("product_title")}
                          defaultValue={data?.fetchDetailProduct?.product_title}
                        /> */}
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
                      <Category2
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
                      <Category2
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
                  </S.InputBox>
                  <S.Error>
                    {formState.errors.product_category?.message}
                  </S.Error>
                  <S.Error className="subCategory">
                    {formState.errors.product_sub_category?.message}
                  </S.Error>
                </S.InputWrap>
              </S.Body_Top>
              <S.PriceBox>
                <S.InputWrap className="radio">
                  <S.ThemeBox>
                    <S.Theme>
                      가능 금액
                      <S.Required>*</S.Required>
                    </S.Theme>
                  </S.ThemeBox>
                  <S.RadioWrap>
                    <S.RadioBox>
                      <S.Label>
                        <S.Radio type="radio" name="price" defaultChecked onChange={onChangePossibleAmount} value={"직접입력"}/>
                      </S.Label>
                      <S.InputBox className="short">
                        <InputHeight40px
                          register={register("product_possibleAmount")}
                          defaultValue={
                            data?.fetchDetailProduct?.product_possibleAmount ??
                            ""
                          }
                          placeholder="예) 10,000 P"
                          disabled={disabledPossibleAmount}
                        />
                      </S.InputBox>
                    </S.RadioBox>
                    <S.RadioBox>
                      <S.Label>
                        <S.Radio type="radio" name="price" onChange={onChangePossibleAmount} value={"협의가능"}/>
                        금액의 조율이 가능해요.
                      </S.Label>
                    </S.RadioBox>
                    <S.Error className="radio">
                      {formState.errors.product_possibleAmount?.message}
                    </S.Error>
                  </S.RadioWrap>
                </S.InputWrap>
                <S.InputWrap className="radio">
                  <S.ThemeBox>
                    <S.Theme>
                      필요 날짜
                      <S.Required>*</S.Required>
                    </S.Theme>
                  </S.ThemeBox>
                  <S.RadioWrap>
                    <S.RadioBox>
                      <S.Label>
                        <S.Radio type="radio" name="date" defaultChecked onChange={onChangeDate} value={"직접입력"}/>
                      </S.Label>
                      <S.InputBox className="short">
                        <DatePicker onChange={onChangeDatePicker} size="large" showToday={false} format={"YYYY. MM. DD"} disabled={disabledDate}/>
                      </S.InputBox>
                    </S.RadioBox>
                    <S.RadioBox>
                      <S.Label>
                        <S.Radio type="radio" name="date" onChange={onChangeDate} value={"협의가능"}/>
                        날짜의 조율이 가능해요.
                      </S.Label>
                    </S.RadioBox>
                    <S.Error className="radio">
                      {formState.errors.product_date?.message}
                    </S.Error>
                  </S.RadioWrap>
                </S.InputWrap>
              </S.PriceBox>
              <S.Body_Middle>
                <S.BoardContent>
                  <S.Theme>
                    구인글 내용
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
                {/* <S.AvailableTime>
                  <S.Theme>
                    연락 가능 시간
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.SetTimeBox>
                    {props.isEdit && data && (
                      <>
                        <WorkDay
                          workDay={workDay}
                          setWorkDay={setWorkDay}
                          data={data?.fetchDetailProduct?.product_workDay}
                        />
                        <TimePick
                          startTime={startTime}
                          setStartTime={setStartTime}
                          endTime={endTime}
                          setEndTime={setEndTime}
                          data={data?.fetchDetailProduct}
                        />
                      </>
                    )}
                    {!props.isEdit && (
                      <>
                        <WorkDay
                          workDay={workDay}
                          setWorkDay={setWorkDay}
                          data={data?.fetchDetailProduct?.product_workDay}
                        />
                        <TimePick
                          startTime={startTime}
                          setStartTime={setStartTime}
                          endTime={endTime}
                          setEndTime={setEndTime}
                          data={data?.fetchDetailProduct}
                        />
                      </>
                    )}
                  </S.SetTimeBox>
                </S.AvailableTime> */}
                {/* <S.AttachedImg>
                  <S.Theme>
                    이미지 첨부
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.Image>
                    <ImageUpload
                      fileList={fileList}
                      setFileList={setFileList}
                      data={data?.fetchDetailProduct?.images}
                    />
                  </S.Image>
                </S.AttachedImg> */}
                <S.BoardAddress>
                  <S.Theme>
                    희망 지역 (선택)
                    <S.MapDetail>
                      신청자와 작업자가 대면하여 서비스를 주고 받는 경우, 주소를
                      입력하시면 구인에 도움이 될 수 있어요.
                    </S.MapDetail>
                  </S.Theme>
                  <S.AddressBox>
                    <S.MapBox>
                      <Map
                        address={
                          address !== ""
                            ? address
                            : data?.fetchDetailProduct?.product_roadAddress
                        }
                      />
                    </S.MapBox>
                    <S.SearchBox>
                      <S.ZipcodeWrap>
                        <S.ZipcodeBox>
                          <InputHeight38px
                            value={
                              zipcode !== ""
                                ? zipcode
                                : data?.fetchDetailProduct?.product_postNum ??
                                  ""
                            }
                            disabled
                          />
                        </S.ZipcodeBox>
                        <S.SearchBtn
                          onClick={onClickAddressSearch}
                          type="button"
                        >
                          우편번호 검색
                        </S.SearchBtn>
                      </S.ZipcodeWrap>
                      <S.AddressInput>
                        <InputHeight38px
                          value={
                            address !== ""
                              ? address
                              : data?.fetchDetailProduct?.product_roadAddress ??
                                ""
                          }
                          disabled
                        />
                      </S.AddressInput>
                      <S.AddressInput>
                        <S.Input
                          {...register("product_detailAddress")}
                          defaultValue={
                            data?.fetchDetailProduct?.product_detailAddress ??
                            ""
                          }
                        />
                      </S.AddressInput>
                    </S.SearchBox>
                  </S.AddressBox>
                </S.BoardAddress>
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
