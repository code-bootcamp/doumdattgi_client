export const getCouponType = (coupon: string) => {
  if (coupon === "ONE_DAY") return "1일권";

  if (coupon === "THREE_DAYS") return "3일권";

  if (coupon === "SEVEN_DAYS") return "7일권";
};
