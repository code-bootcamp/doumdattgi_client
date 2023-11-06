// 1200 = 메인 배너 좌우 버튼 위치 변경
// 960 = 띠 배너 flex
// 520 = 메인 배너 모바일 크기 변경
export const breakpoints = [1140, 1000, 768, 590, 430, 1200, 960, 520];
export const mq = breakpoints.map(
  bp => `@media screen and (max-width: ${bp}px)`
);
// 로그인 페이지 높이 제한
export const mq2 = `@media screen and (max-height: 765px)`;
