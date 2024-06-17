import styles from "../css/TodoItem.module.css"
export default function TodoItem({item}){
    return(
        <div className={styles.item}>
            <div className={styles.itemname}>{item}</div>
            <hr className={styles.line}/>
        </div>
    )
}