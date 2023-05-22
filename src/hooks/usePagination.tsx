import { useRouter } from "next/router";
import React from "react";

const usePagination = () => {
  const router = useRouter();
  const handlePagination = (pageNumber: number) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: pageNumber },
      },
      undefined,
      { shallow: true }
    );
  };

  return { handlePagination };
};

export default usePagination;
