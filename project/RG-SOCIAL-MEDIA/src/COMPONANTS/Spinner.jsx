

const Spinner = () => {
     let css={
          margin:"auto",
          position:"Absolute",
          top:"30%",
          left:"40%"
     }

  return (
    <div style={{css}}>
      <div style={{height:"4rem", width:"4rem" ,}} className="spinner-border m-5 " role="status">
  <span className="visually-hidden" >Loading...</span>
</div>
    </div>
  )
}

export default Spinner;
