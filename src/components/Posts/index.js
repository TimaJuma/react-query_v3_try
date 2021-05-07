import React from "react";
import axios from "axios";
// import { usePosts } from "./hooks";
import { useCreatePosts } from "./mutations";
import usePosts from "./usePosts";

function Posts({ setActivePostId }) {
  const { error, refetch, posts, status } = usePosts();
  const [createPost, createPostStatus] = useCreatePosts();

  const onSubmit = async (values) => {
    try {
      await createPost(values);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div>
        <h3> BOOKS BELOW as POSTS</h3>
        <div>
          {status === "loading" ? (
            <span>Loading...</span>
          ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
            <div>
              {posts.map((post) => (
                <div key={post.id}>
                  <a href={post.id} onClick={() => setActivePostId(post.id)}>
                    {post.title}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Posts;
