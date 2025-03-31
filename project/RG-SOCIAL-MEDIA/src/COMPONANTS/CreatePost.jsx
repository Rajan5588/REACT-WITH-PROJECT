import { useContext, useRef } from "react";
import { PostList } from "../STORE/PostList";


const CreatePost = () => {
    const {addPost}=useContext(PostList)

    const userIdElement=useRef();
    const postTitleElement=useRef();
    const postBodyElement=useRef();
    const reactionsElement=useRef();
    const tagsElement=useRef();

    const handleSubmit=(e)=>{
     e.preventDefault();
     const userId=userIdElement.current.value;
     const postTitle=postTitleElement.current.value;
     const postBody=postBodyElement.current.value;

     const reactions=reactionsElement.current.value.split(' ');
     const tags=tagsElement.current.value.split(' ');

     userIdElement.current.value='';
     postTitleElement.current.value='';
     postBodyElement.current.value='';
     reactionsElement.current.value='';
 
     tagsElement.current.value='';

     addPost(userId,postTitle,postBody,reactions,tags);
    }
  return (
    <>
      <form className="CreatePost" onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="userId" className="form-label" >Enter UserId:</label>
    <input type="text"ref={userIdElement} className="form-control" id="userId" placeholder="Your UserId" /> 
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label" >Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling Today..."/> 
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label" >Post Contant</label>
    <textarea  ref={postBodyElement} type="text" rows="6" className="form-control" id="body" placeholder="Tell Us about More..."/> 
  </div>
  <div className="mb-3">
    <label htmlFor="reaction" className="form-label" >No. of Reaction</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reaction" placeholder="How many People reacted to this Post"/> 
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label" >Enter Your hashTags here</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please Enter tags Using Space"/> 
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default CreatePost;
