import { createContext, useReducer } from "react";

 export const PostList = createContext({
  postList:[],
  addPost: () => {},
  addInitialPosts:()=>{},
  deletePost:() => {},
});

const postListReducer = (currPostList, action) => {
     let NewpostList=currPostList
     if(action.type==="DELETE_POST"){
      NewpostList=currPostList.filter((post)=>
        {return post.id!==action.payload.postId});
     }else if(action.type==="ADD_INITIAL_POSTS"){
      NewpostList=action.payload.posts
     }else if(action.type==="ADD_POST"){
NewpostList=[action.payload,...currPostList]
     }
  return NewpostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,[]);
  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId:userId,
        tags: tags,
      }
    })
  };
  //new 
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type:"ADD_INITIAL_POSTS",
      payload:{
       posts,
      }
    })
  };


  const deletePost = (postId) => {
     dispatchPostList({
          type:"DELETE_POST",
          payload:{
               postId,
          },
     })
  };
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, addInitialPosts:addInitialPosts,deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
