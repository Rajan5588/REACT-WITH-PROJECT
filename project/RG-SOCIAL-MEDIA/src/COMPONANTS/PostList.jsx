import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData} from "../STORE/PostList";

const PostList = () => {
 const { postList}= useContext(PostListData)
  return (
    <>
    {postList.map((post)=>{
      return <Post key={post.id} post={post}></Post>
    })}
      
    </>
  )
}

export default PostList;
