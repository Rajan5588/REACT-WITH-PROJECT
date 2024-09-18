import styles from "./Items.module.css"

export default function Items({FoodItem, Bought,handleBuyButton}) {
      // Destucturing of object
     
  return (
    <div>
<li className={`${styles['RG-Coding']} list-group-item ${Bought && "active"} `}>
  <span className={styles["RG-Span"]}>{FoodItem}</span>
  <button className={`${styles.Buttons} btn btn-success`} onClick={handleBuyButton}>BUY</button>
  </li>
    </div>
  )
}
