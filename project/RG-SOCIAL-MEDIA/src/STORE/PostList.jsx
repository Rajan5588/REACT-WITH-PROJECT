import { createContext, useReducer } from "react";

 export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
     let NewpostList=currPostList
     if(action.type==="DELETE_POST"){
      NewpostList=currPostList.filter((post)=>{return post.id!==action.payload.postId});
     }else if(action.type==="ADD_POST"){
NewpostList=[action.payload,...currPostList]
     }
  return NewpostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
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
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Bihar",
    body: "Hi Friends , I am goinfg to Bihar for my vacations. Hope to enjoy a lot. peace out.",
    reaction: 2,
    userId: "user-20",
    tags: ["vacation", "Bihar", "Enjoying"],
  },
  {
     id: "2",
     title: "Going to Mumbai",
     body: "Hi Friends , I am going to Mumbai for my study. ",
     reaction: 21,
     userId: "user-9",
     tags: ["ENGINEERING", "CODING", "WITH ENJOYING"],
   },
];
export default PostListProvider;
