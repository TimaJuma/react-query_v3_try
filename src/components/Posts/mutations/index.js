import React from "react";
import axios from "axios";

export function useCreatePosts() {
  const [status, setStatus] = React.useState("idle");

  const createPost = React.useCallback(async (values) => {
    try {
      setStatus("loading");
      await axios.post("/books", values);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      throw err;
    }
  });

  return [createPost, status];
}
