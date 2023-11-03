export const breakpoints = [1140, 1000, 768, 590, 430, 1200, 950];
export const mq = breakpoints.map(
  bp => `@media screen and (max-width: ${bp}px)`
);
export const mq2 = `@media screen and (max-height: 765px)`;
