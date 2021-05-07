import React from "react";
import axios from "axios";

import React from "react";

const index = () => {
  return <div></div>;
};

export default index;

function Posts({ setActivePostId }) {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState();
  const [status, setStatus] = React.useState("loading");

  const fetchPosts = async () => {
    try {
      setStatus("loading");
      const posts = await axios.get("/books").then((response) => response.data);
    } catch (err) {
      setError(err);
      setStatus("error");
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);


  const onSubmit = async (values) => {
      try {
        setMutationStatus('loading');
        await axios.post("/books", values)
        setInitialValues({})
        setMutationStatus('success');
        fetchPosts();
      } catch (err) {
          setMutationStatus('error')
          console.log(err);
      }
  }

  const [initialValues, setInitialValues] = React.useState({});
  const [mutationStatus, setMutationStatus] = React.useState("idle");

  return <>
    <section>
        <div>
            <h3> Posts TRial</h3>
            <div>
                {status === "loading" ? }
            </div>
        </div>
    </section>
  </>;
}
