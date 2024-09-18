
import styles from './FoodInput.module.css'
 function FoodInput({handleOnKeyDown}) {

  return (
    <div>
      <input className={styles.Inpu} type="text" placeholder='ENTER FOOD ITEMS HERE' onKeyDown={handleOnKeyDown}/>
    </div>
  )
}
export default FoodInput;