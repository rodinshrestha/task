import { getTaskPagination } from "@/http/get-task-2-pagination";
import { PostData } from "@/types/post.type";
import { GetServerSideProps } from "next";
import React from "react";
import { Box } from "@chakra-ui/react";

import { getPostSearch } from "@/http/get-task-3-search";
import Task3 from "@/modules/Task-3";
import BaseLayout from "@/layout/BaseLayout";

type Props = {
  data: PostData;
};

const Task3Search = ({ data }: Props) => {
  return (
    <BaseLayout>
      <Box padding={2}>
        <Task3 data={data} />
      </Box>
    </BaseLayout>
  );
};

export default Task3Search;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const post = await getPostSearch("foo");

    return {
      props: { data: post },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
