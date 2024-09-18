import Header from "./COMPONANTS/Header";
import Footer from "./COMPONANTS/Footer";
import SideBar from "./COMPONANTS/SideBar";
import "./App.css";
import CreatePost from "./COMPONANTS/CreatePost";
import PostList from "./COMPONANTS/PostList";
import { useState } from "react";
import PostListProvider from "./STORE/PostList";

function App() {
  let [selectedTap, setSelectedTap] = useState("Home");

let OnSlideBarChange=(e)=>{
let SelectedText=e.target.innerText;
setSelectedTap(SelectedText);
}
  return (
    <PostListProvider>
    <>
      <div className="app-container">
        <SideBar selectedTap={selectedTap} OnSlideBarChange={OnSlideBarChange} ></SideBar>
        <div className="contant">
          <Header />
          {selectedTap === "Home"?<PostList/>:<CreatePost/>}
          <Footer></Footer>
          
        </div>
      </div>
    </>
    </PostListProvider>
  );
}

export default App;
