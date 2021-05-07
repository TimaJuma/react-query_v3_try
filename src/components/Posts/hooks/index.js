import React from "react";
import axios from "axios";

export function usePosts() {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState();
  const [status, setStatus] = React.useState("loading");

  const refetch = async () => {
    try {
      console.log("fetching");
      setStatus("loading");
      const posts = await axios
        .get("http://localhost:4000/books")
        .then((response) => response.data);
      setPosts(posts);
      setError();
      setStatus("success");
    } catch (err) {
      setError(err);
      setStatus("error");
    }
  };

  React.useEffect(() => {
    refetch();
  }, []);

  return {
    posts,
    status,
    error,
    refetch,
  };
}
