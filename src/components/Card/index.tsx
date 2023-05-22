import React from "react";
import {
  Card,
  CardHeader,
  Flex,
  Box,
  Heading,
  Text,
  Avatar,
  Button,
  IconButton,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import Image from "next/image";
import { AddIcon } from "@chakra-ui/icons";
import { PostType } from "@/types/post.type";
import Link from "next/link";
import { formatDate } from "@/utils/format-date";

type Props = {
  item: PostType;
};

const CardComponent = ({ item }: Props) => {
  return (
    <Card maxW="md">
      <CardHeader>
        git test
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={item.author} />

            <Box>
              <Heading size="sm">{item.author}</Heading>
              <Text>Points: {item.points}</Text>
            </Box>
          </Flex>
          {formatDate(item.created_at)}
        </Flex>
      </CardHeader>
      <CardBody>
        <Text mt={4}>{item.title}</Text>
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost">
          {item.num_comments} Comment
        </Button>
        {item.url && (
          <Button flex="1" variant="ghost">
            <Link href={item.url} style={{ width: "100%" }} target="_blank">
              View
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
