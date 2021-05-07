import React from "react";
import axios from "axios";

const context = React.createContext();

export function PostsContext({ children }) {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState();
  const [status, setStatus] = React.useState("loading");

  const activePomiseRef = React.useRef(false);

  const refetch = async () => {
    if (activePomiseRef.current) {
      activePomiseRef.current = (async () => {
        try {
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
        } finally {
          activePomiseRef.current = false;
        }
      })();
    }

    return activePomiseRef.current;
  };

  const contextValue = React.memo(() => ({
    posts,
    status,
    error,
    refetch,
  }));

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export default function usePosts() {
  const { posts, status, error, refetch } = React.useContext(context);
  if (React.useContext(context) === undefined) {
    throw new Error("useFormDispatch must be used within a UserProvider");
  }

  React.useEffect(() => {
    refetch();
  }, [refetch]);
  return { posts, status, error, refetch };
}
