import { useRouter } from "next/router";

const useSort = () => {
  console.log("feature");
  const router = useRouter();
  const handleSort = (key: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, sort: key },
      },
      undefined,
      { shallow: true }
    );
  };

  return { handleSort };
};

export default useSort;
