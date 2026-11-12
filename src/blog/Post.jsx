import styles from './Post.module.css';

function Post(props) {
    return (
        <div>
            <h1 className = {styles["blog-title"]}>{props.title}</h1>
            <p className = {styles["blog-content"]}>{props.content}</p>
            <br/>
            <p className = {styles["blog-author"]}><span className = {styles.bold}>Author:</span> {props.author}</p>
            <p className = {styles["blog-date"]}><span className = {styles.bold}>Date:</span> 11/5/2026</p>
        </div>
    )
}

export default Post;