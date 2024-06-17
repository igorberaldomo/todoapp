import { useState } from "react";
import styles from "../css/Form.module.css"
export default function Form({todos,setTodos}){
    const [todo, setTodo] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("")
    }
    return(
        <form className = {styles.todoform} onSubmit={handleSubmit}>
               <div className={styles.container}> 
                    <input className = {styles.moderninput} onChange={(e) => setTodo(e.target.value)} type="text" value={todo} placeholder="Enter todo item..." />
                    <button className={styles.modernbutton} type="submit">Add</button>
                </div>
            </form>
    )
}