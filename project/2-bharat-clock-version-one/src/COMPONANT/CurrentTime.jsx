import { useEffect, useState } from "react";

 function CurrentTime() {
          let [data,setData]=useState(new Date())
     useEffect(()=>{
      console.log("interval has been setup")
      const interVerId=setInterval(()=>{
          setData(new Date());
      },1000);   
      return ()=>{
        clearInterval(interVerId);
        console.log("cencel the Interval")
      }
     },[]);

  return (
    <div>
      <p className="lead">This is the current Time: {data.toLocaleDateString()}-{data.toLocaleTimeString()} </p>
    </div>
  )
}

export default CurrentTime;
