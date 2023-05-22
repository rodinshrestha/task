import { getTaskPagination } from "@/http/get-task-2-pagination";
import { PostData } from "@/types/post.type";
import { GetServerSideProps } from "next";
import React from "react";
import { Box } from "@chakra-ui/react";
import Task2 from "@/modules/Task-2";
import BaseLayout from "@/layout/BaseLayout";

type Props = {
  data: PostData;
};

const Task2Pagination = ({ data }: Props) => {
  return (
    <BaseLayout>
      <Box padding={2}>
        <Task2 data={data} />
      </Box>
    </BaseLayout>
  );
};

export default Task2Pagination;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const post = await getTaskPagination(2);

    return {
      props: { data: post },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
