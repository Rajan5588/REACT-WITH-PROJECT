import 'bootstrap/dist/css/bootstrap.min.css';
const SideBar = ({selectedTap,OnSlideBarChange}) => {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark slide" style={{width: "280px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="40"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">SIDEBAR</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#"  onClick={OnSlideBarChange} className= {selectedTap==="Home"?"nav-link active text-white":"nav-link text-white"} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" onClick={OnSlideBarChange} className={selectedTap==="Create Post"?"nav-link active text-white":"nav-link  text-white"}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
         Create Post
        </a>
      </li> 
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="RGPHOTO.jpg" alt="" width="37" height="37" className="rounded-circle me-2"/>
        <strong>RAJAN</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
   
  </div>
    </div>
  )
}

export default SideBar;
