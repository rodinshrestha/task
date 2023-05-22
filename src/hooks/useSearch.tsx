import { useRouter } from "next/router";

const useSearch = () => {
  const router = useRouter();
  const handleSearch = (query: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, query },
      },
      undefined,
      { shallow: true }
    );
  };

  return { handleSearch };
};

export default useSearch;
