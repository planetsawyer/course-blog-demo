import Post from './Post';
import styles from './BlogArea.module.css';
import CommentBox from './CommentBox';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function BlogArea(props) {

  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const [post, setPost] = useState({title: "", content: ""});
  const {post_id} = useParams();

  useEffect(() =>  {
    const fetch = async () => {
      try {
        const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
        setPost({title: postData.data.title, content: postData.data.body});

        const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${postData.data.userId}`);
        setUserId(userData.data.name);
      }
      catch (e) {
        alert(e);
      }
      finally {
        setLoading(false);
      }
    }

    fetch();
  }, []);
  

  return (
    <div>
      {loading ? <p>Content is loading</p> :
      <div className = {styles["blog-area-wrapper"]}>
        <Post title = {post.title} content = {post.content} author = {userId}/>
        <CommentBox/>
      </div>}
    </div>
  )

return <p className = "text-red-500">Post Not Found</p>

}

export default BlogArea;