import { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div>
      PostsPage
      <span>Посты</span>
      <ul>{posts && posts.map((post) => <li>{post.title}</li>)}</ul>
    </div>
  );
};
export default PostsPage;
