import { useRouter } from "next/router";

export default function useMoveToSubCategory() {
  const router = useRouter();

  const clickSubCategory = (data: string) => () => {
    const sub = String(data);

    router.push({
      pathname: `/categoryList/subCategoryList/${router.query.data}`,
      query: { sub }
    });
  };

  return { clickSubCategory };
}
