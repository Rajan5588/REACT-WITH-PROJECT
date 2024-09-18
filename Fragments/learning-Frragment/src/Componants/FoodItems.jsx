import { useState } from "react"
import Items from "./Items"
const FoodItems = ({Items1}) => {
  let [ActiveI,setActiveI]=useState([]);

  let onBuyButtonactive=(Item,event)=>{
let NewActive=[...ActiveI, Item]
setActiveI(NewActive)
  }
   //  let Foods=[]
   //let Emty=Foods.length===0?<h1>I AM HUNGRY</h1>:null;// turnary operator 
  //let  Emty2=Foods.length===0&&<h1>I AM HUNGURY</h1>// CONDITIONAL RANDARY AND IF ELSE TRUE FALSE(NULL,FALSY,0,ETC..)
//   let Foods=["Dal","Roti","salad","Rice","Milk","Apple"]
  return (
    <>
      <ul className="list-group">
  {
  Items1.map((Item)=>{
     return <>
     <Items  key={Item} FoodItem={Item} handleBuyButton={(event)=>onBuyButtonactive(Item,event)}
      Bought={ActiveI.includes(Item)}/>
     </>
    })
    }

</ul>
    </>
  )
}

export default FoodItems
