import { useEffect, useState } from "react";
import styles from './CommentBox.module.css';
import { useParams } from "react-router";
import axios from "axios";

function CommentBox() {

    const {post_id} = useParams();
    const [comment, setComment] = useState({name: "", content: ""});
    const [commentList, setCommentList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
        .then((data) => setCommentList(data.data.map((item) => ({name: item.name, content: item.body}))))
        .finally(() => setLoading(true))
    }, []);

    // const addComment = (comment) => {

    //     if (comment.name.trim() === "" || comment.content.trim() === "") {
    //         alert("Cannot submit empty fields");
    //         return;
    //     }

    // setCommentList([...commentList, comment])
    // }

    const postComment = () => {
        if (comment.name.trim() === "" || comment.content.trim() === "") {
            alert("Cannot submit empty fields");
            return;
        }
        axios.post(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`, {name: comment.name, body: comment.content})
        .then((post) => console.log(post))
        .catch((e) => error(e));

        setCommentList([...commentList, comment]);
    }

    return (
    <div>
        <div className = {styles["comment-area"]}>
            <h2>Comments</h2>
            <input className = {styles.comment} placeholder = "Name" value = {comment.name} onChange = {(e) => setComment({...comment, name: e.target.value})}/>
            <textarea className = {styles.comment} placeholder = "Type a comment" value = {comment.content} onChange = {(e) => setComment({...comment, content: e.target.value})}></textarea>
            <button className = {styles.submit} type = "submit" onClick = {postComment}>Submit</button>
        </div>
        {
        commentList.length === 0 ? <p className = "text-center">No comments yet.</p> : 
        <div>
            <h3>Existing comments:</h3>
            <ul className = {styles.comments}>
            {commentList.map((value, index) => 
            <li key = {index}>
            <p><strong>{value.name}</strong></p>
            <p>{value.content}</p>
            </li>)}
            </ul>
        </div>
        }
    </div>
    )
}

export default CommentBox;