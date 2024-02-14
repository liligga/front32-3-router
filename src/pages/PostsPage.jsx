import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // const data = await response.json();
      setPosts(response.data);
    };
    getPosts();
  }, []);

  return (
    <div>
      PostsPage
      <span>Посты</span>
      <ul>{posts && posts.map((post) => 
        <li key={post.id}>
          <Link to={`/articles/${post.id}`}>{post.title}</Link>
        </li>
      )}</ul>
    </div>
  );
};
export default PostsPage;
