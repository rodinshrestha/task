import { PostData } from "@/types/post.type";
import { GetServerSideProps } from "next";
import React from "react";
import { Box } from "@chakra-ui/react";
import Task4 from "@/modules/Task-4";
import { getPost } from "@/http/getPost";
import BaseLayout from "@/layout/BaseLayout";

type Props = {
  data: PostData;
};

const Task4Sort = ({ data }: Props) => {
  return (
    <BaseLayout>
      <Box padding={2}>
        <Task4 data={data} />
      </Box>
    </BaseLayout>
  );
};

export default Task4Sort;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const post = await getPost();

    return {
      props: { data: post },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
