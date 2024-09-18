import Container from "./Componants/Container";
import React from "react";
import FoodItems from "./Componants/FoodItems";
import ErrorMass from "./Componants/ErrorMass";
import FoodInput from "./Componants/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {useState} from 'react'

function App() {
   // sending Items
  // let useArr=useState("FOOD ITEMS ENTER BY USER");
  // let TextToShow=useArr[0];
  //   let setUse=useArr[1]; 
  let [Foods , setFoods]=useState([])
  const handleOnChange=(event)=>{
    if(event.key==='Enter' && event.target.value!==''){
    console.log(event.target.value) 
  
 let newFoodItems=event.target.value;
  let NewItems=[...Foods,newFoodItems];
  setFoods(NewItems);
    event.target.value=''
  }
}
  return (
    <center>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
       
        <FoodInput handleOnKeyDown={handleOnChange} />  
        <ErrorMass Items={Foods}/>
        <FoodItems Items1={Foods}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab corrupti
          nihil reprehenderit fugit nulla beatae aut voluptates. Nostrum dolorum
          laborum, eum assumenda tenetur consequuntur vero sunt deserunt
          exercitationem incidunt unde inventore molestias veritatis ipsa ea
          quae cumque corporis quasi iure.
        </p>
      </Container> */}
    </center>
  );
}

export default App;
