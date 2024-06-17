import styles from "../css/TodoItem.module.css"
export default function TodoItem({item, todos, setTodos}){
    function handleDelete(item){
        // todos.filter vai retornar um array de todos os items que NÃO são iguais a variável item, ou seja colocamos para editar o array de forma que o resultado de todos.filter seja aplicado pelo método setTodos
        setTodos(todos.filter((todo)=>todo !== item))
    }
    return(
        <div className={styles.item}>
            <div className={styles.itemname}>{item}</div>
            <span>
                <button onClick={() => handleDelete(item)} className={styles.deletebutton}>X</button>
            </span>
            <hr className={styles.line}/>
        </div>
    )
}