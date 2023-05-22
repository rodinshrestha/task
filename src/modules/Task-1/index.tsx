import React from "react";
import { Box } from "@chakra-ui/react";
import CardComponent from "@/components/Card";
import { PostData } from "@/types/post.type";
type Props = {
  data: PostData;
};

const Task1 = ({ data }: Props) => {
  return (
    <Box
      display={"grid"}
      gap={"20px"}
      gridTemplateColumns={"repeat(4, 1fr)"}
      mt={10}
    >
      {data.hits.map((x, i) => {
        return <CardComponent item={x} key={i} />;
      })}
    </Box>
  );
};

export default Task1;
