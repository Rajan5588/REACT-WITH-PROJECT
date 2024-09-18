import css from './Display.module.css';
const Display=({calval})=>{
     return <>
     <input type="text" className={css.display} value={calval} readOnly/>
     </>
}


export default Display;