import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData} from "../STORE/PostList";
import WelcomeMassage from "./WelcomeMassage";
import Spinner from "./Spinner";

const PostList = () => {

 const { postList,addInitialPosts }= useContext(PostListData);
 const [spiner, SetSpiner]=useState(false);

 useEffect(()=>{
  SetSpiner(true)
  fetch('https://dummyjson.com/posts')
  .then((res )=>{ 
    console.log(res)
   return res.json()
  }).then((data)=>{
    console.log(data)
  let datas=data.posts;
 
addInitialPosts(datas)

   SetSpiner(false)
  });
 

},[])
  return (
    <>{
      spiner?<Spinner></Spinner>:null
    }
    
    {postList.length===0 && !spiner?< WelcomeMassage ></WelcomeMassage>:null}
    {
    postList.map((post)=>{
      console.log(post)
        return <Post key={post.id} posts={post}></Post>
 } )}
      
    </>
  )
}

export default PostList;
