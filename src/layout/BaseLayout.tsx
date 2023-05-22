import React from "react";
import { TabList, Tab, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const tabIndex = [
    "/",
    "/task-2-pagination",
    "/task-3-search",
    "/task-4-sort",
  ];
  const router = useRouter();

  return (
    <Tabs index={tabIndex.indexOf(router.pathname)}>
      <TabList>
        <Link href={"/"}>
          <Tab>task-1: Fetch post</Tab>
        </Link>
        <Link href={"/task-2-pagination"}>
          <Tab>task-2: Pagination Post</Tab>
        </Link>
        <Link href={"/task-3-search"}>
          <Tab>task-3: Search Post</Tab>
        </Link>
        <Link href={"/task-4-sort"}>
          <Tab>task-4: Sort Post</Tab>
        </Link>
      </TabList>
      {children}
    </Tabs>
  );
};

export default BaseLayout;
