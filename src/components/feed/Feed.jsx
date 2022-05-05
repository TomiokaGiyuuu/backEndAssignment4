import './feed.css';
import Share from "../share/Share";
import Post from "../post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {Posts} from "../../fakeData";

const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/post/profile/" + username)
                : await axios.get("/post/timeline/62638581e3db68fab981bdfe");
            setPosts(res.data);
        }
        fetchPosts();
    }, [username])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key = {p._id} post = {p}/>
                ))}
            </div>
        </div>
    );
};

export default Feed;
