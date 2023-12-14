type OptionType = {
  [key: string]: string[];
};

export const category = [
  { label: "IT・프로그래밍", value: "IT" },
  { label: "디자인", value: "DESIGN" },
  { label: "번역・통역", value: "TRANSLATE" },
  { label: "영상・방송", value: "VIDEO" },
  { label: "마케팅", value: "MARKETING" },
  { label: "문서・레포트", value: "DOCUMENT" }
];

export const option: OptionType = {
  DESIGN: [
    "로고・브랜딩",
    "인쇄・홍보물",
    "패키지・커버",
    "웹・모바일 디자인",
    "마케팅 디자인",
    "산업・제품 디자인",
    "캐릭터・일러스트",
    "게임",
    "캘리그라피・폰트",
    "공간・건축",
    "패션",
    "그래픽 디자인",
    "기타"
  ],
  IT: [
    "UX기획",
    "웹",
    "커머스",
    "모바일",
    "프로그램",
    "트렌드",
    "데이터",
    "기타"
  ],
  TRANSLATE: ["번역", "통역", "기타"],
  VIDEO: ["영상", "음향", "방송", "기타"],
  MARKETING: [
    "채널 활성화",
    "바이럴",
    "PR・행사",
    "업종・목적별",
    "최적화 노출",
    "해외 마케팅",
    "광고",
    "분석・전략",
    "AI 마케팅",
    "옥외・인쇄・방송 광고",
    "기타"
  ],
  DOCUMENT: [
    "비즈니스 카피",
    "마케팅 글쓰기",
    "콘텐츠 글쓰기",
    "AI 글쓰기",
    "스토리텔링",
    "타이핑・첨삭",
    "기타"
  ]
};
