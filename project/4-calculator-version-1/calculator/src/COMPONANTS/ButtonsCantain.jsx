import css from './ButtonsCantain.module.css'

 function ButtonsCantain({OnbuttonClick}) {
     const ButtonsName=["C","1","2","+","3","4","-","5", "6","*","7","8","/","=","9","0","."];
  return (
    <div>
       <div className={css.buttonCantainer}>
{ButtonsName.map((Butt)=>{
      return <button className={css.button} onClick={OnbuttonClick}>{Butt}</button>
               })
          }
       </div>
    </div>
  )
}
export default ButtonsCantain;