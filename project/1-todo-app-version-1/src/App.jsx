import AppName from "./Componants/AppName";
import AddTodo from "./Componants/AddTodo";
import './App.css';
import TodoItemsV from "./Componants/TodoItemsV";
import WelcomeM from "./Componants/WelcomeM";
import { useReducer, useState } from "react";
import { TodoItemsDContext } from "./Store/Todo-Items-Store";

// pure function 
const todoItemReducer=(CurrTodoItemsD,action)=>{
  let NewTodoItems=CurrTodoItemsD;
 if(action.type==="New_Items"){
   NewTodoItems=[
    ...CurrTodoItemsD,{
    Name:action.payload.TodoN,
   Date1:action.payloadtodoD,
 }]
 }else if(action.type==='Delete_New_Items'){
  NewTodoItems= CurrTodoItemsD.filter((item)=>{
      return item.Name!=action.payload.Name});
 }
  return NewTodoItems;
}


function App() {

  //const[TodoItemsD,setTodoItemsD]=useState([]);
const [TodoItemsD,dispatchTodoItemsD]=useReducer(todoItemReducer,[]);

function handleOnButton(TodoN,todoD){ 
//useReducer add action

  const newItemsAction={
    type:"New_Items",
    payload:{
      TodoN,
      todoD,
    }
  }
dispatchTodoItemsD(newItemsAction)
 /* let NewTodoItems=[...TodoItemsD,{
     Name:TodoN,
    Date1:todoD,
  }]
    setTodoItemsD(NewTodoItems)*/

}

 function ItemDelete(Name){

//  let NewItem1= TodoItemsD.filter((item)=>{
//  return item.Name != Name; });
//  setTodoItemsD(NewItem1)

  //useReducer add action
    const DeleteItemsAction={
      type:"Delete_New_Items",
      payload:{
       Name,
      }
    }
  dispatchTodoItemsD(DeleteItemsAction)


}
// const DefaultTodoItems=[{  Name:"rajan",
//   Date1:"0987",}]
// console.log(DefaultTodoItems)
  return (
    <TodoItemsDContext.Provider value={TodoItemsD}>
  <center className="todo-container">

 <AppName/>
  <AddTodo OnchangeB={handleOnButton}/>
<WelcomeM ></WelcomeM>
<TodoItemsV  OnDelete={ItemDelete}></TodoItemsV>
    
</center>
</TodoItemsDContext.Provider>
  );
}
export default App;
