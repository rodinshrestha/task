import React from "react";
import { Box, Button, Spinner } from "@chakra-ui/react";
import CardComponent from "@/components/Card";
import { PostData } from "@/types/post.type";

import { useRouter } from "next/router";
import { getTaskPagination } from "@/http/get-task-2-pagination";
import clsx from "clsx";
import useSort from "@/hooks/useSort";
import { getPostSort } from "@/http/get-task-4-sort";
import { LATEST, POPULAR } from "@/constants/sort-constant";
type Props = {
  data: PostData;
};

const Task4 = ({ data }: Props) => {
  const router = useRouter();

  const [state, setState] = React.useState<PostData>(data);
  const [loader, setLoader] = React.useState(router.query.page ? true : false);
  const [onSelectedSort, setOnSelectedSort] = React.useState("");

  const { handleSort } = useSort();

  React.useEffect(() => {
    const { sort } = router.query;
    if (router.isReady && typeof sort === "string") {
      setLoader(true);
      setOnSelectedSort(sort);
      getPostSort(sort)
        .then((res: any) => {
          setState(res);
          setLoader(false);
        })
        .catch(() => setLoader(false));
    }
  }, [router]);

  if (loader)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size={"lg"} />;
      </Box>
    );

  return (
    <Box>
      <Box display="flex" justifyContent="center" my={5} gap={5}>
        <Button
          onClick={() => handleSort(POPULAR)}
          className={clsx({ "btn-disable": onSelectedSort === POPULAR })}
        >
          Popular Post
        </Button>
        <Button
          onClick={() => handleSort(LATEST)}
          className={clsx({ "btn-disable": onSelectedSort === LATEST })}
        >
          Latest Post
        </Button>
      </Box>
      <Box
        display={"grid"}
        gap={"20px"}
        gridTemplateColumns={"repeat(4, 1fr)"}
        mt={10}
      >
        {state &&
          state.hits.map((x, i) => {
            return <CardComponent item={x} key={i} />;
          })}
      </Box>
    </Box>
  );
};

export default Task4;
