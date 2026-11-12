import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function BlogPostsPage () {
    const commoncss = "bg-blue-200 rounded-2xl self-center pl-10 pr-10 px-3 py-3 w-100";

    const [postList, setPostList] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => setPostList(data.data)).catch((e) => alert(e)).finally(() => setLoading(false))
    }, [])
    return (
        <div>
        {loading ? <p>Content is loading</p> :
            <div className = "flex flex-col gap-y-3 m-3" >
                {postList.map((item) =>
                    <div className = {commoncss}>
                        <Link to = {`/posts/${item.id}`} className = "text-blue-800">Post #{item.id}</Link>
                        <p><strong>Title: {item.title}</strong></p>
                        <p className = "text-sm">Content preview: {(item.body).substring(1, 100)}...</p>
                    </div>
                )}
                
            </div>
        }
        </div>
    )
}

export default BlogPostsPage;