import React from "react";
import { Box, Input, Spinner } from "@chakra-ui/react";
import CardComponent from "@/components/Card";
import { PostData } from "@/types/post.type";

import { useRouter } from "next/router";

import { getPostSearch } from "@/http/get-task-3-search";
import useSearch from "@/hooks/useSearch";
type Props = {
  data: PostData;
};

const Task3 = ({ data }: Props) => {
  const router = useRouter();

  const [state, setState] = React.useState<PostData>(data);
  const [loader, setLoader] = React.useState(router.query.query ? true : false);
  const [onSearch, setOnSearch] = React.useState("");

  const ref: any = React.useRef();

  const { handleSearch } = useSearch();

  React.useEffect(() => {
    const { query } = router.query;
    if (router.isReady && typeof query === "string") {
      setLoader(true);
      setOnSearch(query);
      getPostSearch(query)
        .then((res: any) => {
          setState(res);
          setLoader(false);
        })
        .catch(() => setLoader(false));
    }
  }, [router]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(ref.current);
    const { value } = e.target;
    setOnSearch(value);
    setLoader(true);
    ref.current = setTimeout(() => {
      handleSearch(value);
    }, 1e3);
  };

  return (
    <Box>
      <Input
        placeholder="Search post..."
        onChange={handleOnChange}
        value={onSearch}
      />
      {loader ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Spinner size={"lg"} />;
        </Box>
      ) : (
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
      )}
    </Box>
  );
};

export default Task3;
