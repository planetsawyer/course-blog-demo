import { useParams } from "react-router";
import BlogArea from "./BlogArea";

function IndividualBlogPost () {
    const { post_id } = useParams();
    return (
        <div>
            <BlogArea postId = { post_id }/>
        </div>
    );
}

export default IndividualBlogPost;