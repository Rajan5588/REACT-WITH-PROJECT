import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import { PostList } from "../STORE/PostList";
const Post = ({posts}) => {
 

  const {deletePost}=useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "24rem" }}>
        <div className="card-body">
          <h5 className="card-title">{posts.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=>deletePost(posts.id)}>
          <MdAutoDelete />
  </span>
          </h5>
          <p className="card-text">
         {posts.body}
          </p>
          {posts.tags.map((t)=>{
            return <> <span className="badge text-bg-success">{t}</span></>
          })}
          <br /><br />
<button type="button" className="btn btn-primary position-relative">
👍
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {posts.reactions.likes}
  </span>
</button>
        </div>
      </div>
    </>
  );
};

export default Post;
