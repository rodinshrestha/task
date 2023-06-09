import React from "react";
import CardComponent from "@/components/Card";
import { getPost } from "@/http/getPost";
import { GetServerSideProps } from "next";
import { PostData } from "@/types/post.type";
import { Box } from "@chakra-ui/react";
import Task1 from "@/modules/Task-1";
import BaseLayout from "@/layout/BaseLayout";

type Props = {
  data: PostData;
};

const Home = ({ data }: Props) => {
  return (
    <BaseLayout>
      <Box padding={2}>
        <Task1 data={data} />
      </Box>
    </BaseLayout>
  );
};

export default Home;

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
