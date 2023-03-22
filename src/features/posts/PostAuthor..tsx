import { Text } from "@bacons/react-views";
import React from "react";
import { useSelector } from "react-redux";

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return <Text>by {author ? author.name : "Unknown author"}</Text>;
};
