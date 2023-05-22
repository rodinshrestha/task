import React from "react";
import { Box, Button, Spinner } from "@chakra-ui/react";
import CardComponent from "@/components/Card";
import { PostData, PostType } from "@/types/post.type";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/router";
import { getTaskPagination } from "@/http/get-task-2-pagination";
import clsx from "clsx";
type Props = {
  data: PostData;
};

const Task2 = ({ data }: Props) => {
  const router = useRouter();

  const [state, setState] = React.useState<PostData>(data);
  const [loader, setLoader] = React.useState(router.query.page ? true : false);

  const { handlePagination } = usePagination();

  React.useEffect(() => {
    const { page } = router.query;
    if (router.isReady && page) {
      setLoader(true);
      getTaskPagination(Number(page))
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
      <Box mt={5} display="flex" justifyContent={"center"} gap={5}>
        <Button
          onClick={() => handlePagination(state.page - 1)}
          className={clsx({ "btn-disable": state.page === 0 })}
        >
          Prev
        </Button>
        <Button
          onClick={() => handlePagination(state.page + 1)}
          className={clsx({ "btn-disable": state.page === state.nbPages })}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Task2;
