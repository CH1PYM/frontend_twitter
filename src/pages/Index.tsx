import { Container } from "@mui/material";
import { useState } from "react";
import { Post } from "../components/post";
import useFetch from "../hooks/useFetch";

export const IndexPage = () => {
  const url = `http://localhost:3000/post/get/0`;

  interface Post {
    id: number;
    createdAt: string;
    text: string;
    likes?: number;
    retweet?: number;
    comment?: any;
    userId: number;
    user?: any;
  }

  const { data, error } = useFetch<Post[]>(url);
  console.log(data);
  if (data) {
    console.log(data);
  }
  return (
    <Container>
    <div>
      <div></div>
      {data?.map((item) => {
        return (
          <Post
            date={item.createdAt}
            text={item.text}
            id={item.id}
            userId={item.userId}
          />
        );
      })}
    </div>
    </Container>
  );
};
