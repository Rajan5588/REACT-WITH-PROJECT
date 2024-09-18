
 function CurrentTime() {
     let data=new Date();
  return (
    <div>
      <p className="lead">This is the current Time: {data.toLocaleDateString()}-{data.toLocaleTimeString()} </p>
    </div>
  )
}

export default CurrentTime;
