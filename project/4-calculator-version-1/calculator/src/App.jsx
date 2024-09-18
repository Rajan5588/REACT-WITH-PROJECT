import { useState } from 'react';
import css from './App.module.css';

import ButtonsCantain from './COMPONANTS/ButtonsCantain';
import Display from './COMPONANTS/Display';
function App() {

let [calVal, setCalVal]=useState('');

function OnbuttonClick(e){

let newInputVal=e.target.innerText;

if(newInputVal==="C"){
setCalVal('')
}else if(newInputVal==='='){
let result=eval(calVal)
setCalVal(result)
}else{
let newDisT=calVal+newInputVal;

setCalVal(newDisT)

}
}

  return (
    <center>
     <div className={css.calculator}>
       <Display calval={calVal}></Display>
      <ButtonsCantain OnbuttonClick={OnbuttonClick}></ButtonsCantain>
     </div>
    </center>
  )
}

export default App
