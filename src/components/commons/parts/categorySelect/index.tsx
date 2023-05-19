import React, { useState } from "react";
import { Select } from "antd";

const options = [
  {
    label: "디자인",
    options: [
      { label: "로고・브랜딩", value: "로고・브랜딩" },
      { label: "인쇄・홍보물", value: "인쇄・홍보물" },
      { label: "패키지・커버", value: "패키지・커버" },
      { label: "웹・모바일 디자인", value: "웹・모바일 디자인" },
      { label: "마케팅 디자인", value: "마케팅 디자인" },
      { label: "산업・제품 디자인", value: "산업・제품 디자인" },
      { label: "캐릭터・일러스트", value: "캐릭터・일러스트" },
      { label: "게임", value: "게임" },
      { label: "캘리그라피・폰트", value: "캘리그라피・폰트" },
      { label: "공간・건축", value: "공간・건축" },
      { label: "패션", value: "패션" },
      { label: "그래픽 디자인", value: "그래픽 디자인" },
      { label: "기타", value: "기타" }
    ]
  },
  {
    label: "IT・프로그래밍",
    options: [
      { label: "UX기획", value: "UX기획" },
      { label: "웹", value: "웹" },
      { label: "커머스", value: "커머스" },
      { label: "모바일", value: "모바일" },
      { label: "프로그램", value: "프로그램" },
      { label: "트렌드", value: "트렌드" },
      { label: "데이터", value: "데이터" },
      { label: "기타", value: "기타" }
    ]
  },
  {
    label: "번역・통역",
    options: [
      { label: "번역", value: "번역" },
      { label: "통역", value: "통역" },
      { label: "기타", value: "기타" }
    ]
  },
  {
    label: "영상・방송",
    options: [
      { label: "영상", value: "영상" },
      { label: "음향", value: "음향" },
      { label: "방송", value: "방송" },
      { label: "기타", value: "기타" }
    ]
  },
  {
    label: "마케팅",
    options: [
      { label: "채널 활성화", value: "채널 활성화" },
      { label: "바이럴", value: "바이럴" },
      { label: "PR・행사", value: "PR・행사" },
      { label: "업종・목적별", value: "업종・목적별" },
      { label: "최적화 노출", value: "최적화 노출" },
      { label: "해외 마케팅", value: "해외 마케팅" },
      { label: "광고", value: "광고" },
      { label: "분석・전략", value: "분석・전략" },
      { label: "AI 마케팅", value: "AI 마케팅" },
      { label: "옥외・인쇄・방송 광고", value: "옥외・인쇄・방송 광고" },
      { label: "기타", value: "기타" }
    ]
  },

  {
    label: "문서・레포트",
    options: [
      { label: "비즈니스 카피", value: "비즈니스 카피" },
      { label: "마케팅 글쓰기", value: "마케팅 글쓰기" },
      { label: "콘텐츠 글쓰기", value: "콘텐츠 글쓰기" },
      { label: "AI 글쓰기", value: "AI 글쓰기" },
      { label: "스토리텔링", value: "스토리텔링" },
      { label: "타이핑・첨삭", value: "타이핑・첨삭" },
      { label: "기타", value: "기타" }
    ]
  }
];

const { Option } = Select;

const CategorySelect: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // 카테고리 변경 기능
  const handleChangeCategory = (value: string) => {
    setSelectedCategory(value);
    setSelectedOptions([]);
  };

  // 카테고리별 옵션 변경 기능
  const handleChangeOptions = (value: string[]) => {
    setSelectedOptions(value);
  };

  // 선택한 카테고리에 해당하는 options 필터링
  const getCategoryOptions = () => {
    if (selectedCategory) {
      const selectedCategoryOptions = options.find(
        category => category.label === selectedCategory
      );
      return selectedCategoryOptions ? selectedCategoryOptions.options : [];
    }
    return [];
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%"
      }}
    >
      <Select
        style={{ marginRight: 5, width: "40%" }}
        placeholder="카테고리를 선택해주세요."
        onChange={handleChangeCategory}
        size={"large"}
      >
        {options.map(category => (
          <Option key={category.label} value={category.label}>
            {category.label}
          </Option>
        ))}
      </Select>
      <Select
        style={{ width: "100%" }}
        placeholder="옵션을 선택해주세요."
        value={selectedOptions}
        onChange={handleChangeOptions}
        size={"large"}
      >
        {getCategoryOptions().map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
export default CategorySelect;
