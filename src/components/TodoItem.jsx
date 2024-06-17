import styles from "../css/TodoItem.module.css"
export default function TodoItem({item, todos, setTodos}){
    function handleDelete(item){
        // todos.filter vai retornar um array de todos os items que NÃO são iguais a variável item, ou seja colocamos para editar o array de forma que o resultado de todos.filter seja aplicado pelo método setTodos
        setTodos(todos.filter((todo)=>todo !== item));
    }
    function handleClick(name){
        // percorre o array todos e par cada todo ele vai procurrar aquele que é igual a nome e vai transformar a propiedade done no oposto
        const newArray = todos.map((todo)=> 
            todo.name===name?{...todo,done:!todo.done}:todo)
        setTodos(newArray);
    }
    const doneYet = item.done?styles.completed:""
    return(
        <div className={styles.item}>
            <div className={styles.itemname}>
                <span className={doneYet} onClick={()=>handleClick(item.name)}>{item.name}</span>
                </div>
            <span>
                <button onClick={() => handleDelete(item)} className={styles.deletebutton}>X</button>
            </span>
            <hr className={styles.line}/>
        </div>
    )
}