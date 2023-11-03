import { useRouter } from "next/router";

export default function useMoveToSubCategory() {
  const router = useRouter();

  const clickSubCategory2 = (sub: string) => {
    void router.push({
      pathname: `/categoryList/subCategoryList/${router.query.data}`,
      query: { sub }
    });
  };
  const clickSubCategory = (sub: string) => () => {
    router.push({
      pathname: `/categoryList/subCategoryList/${router.query.data}`,
      query: { sub }
    });
  };

  return { clickSubCategory, clickSubCategory2 };
}
