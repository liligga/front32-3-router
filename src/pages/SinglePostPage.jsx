import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(response.data);
    }
    const getComments = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      setPost(response.data);
    }
    getPost();
  }, []);


  return <div>
    <button onClick={() => navigate(-1)}>Назад</button>
    <span>{post && post.id}</span>
    <h3>{post && post.title}</h3>
    <p>{post && post.body}</p>
  </div>;
};
export default SinglePostPage;
