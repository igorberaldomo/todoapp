import { useState } from "react";
import styles from "../css/Form.module.css"
export default function Form({todos,setTodos}){
    const [todo, setTodo] = useState({name:"",done:false});
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:e.target.value, done:false})
    }
    return(
        <form className = {styles.todoform} onSubmit={handleSubmit}>
               <div className={styles.container}> 
                    <input className = {styles.moderninput} onChange={(e) => setTodo({name:e.target.value, done:false})} type="text" value={todo.name} placeholder="Enter todo item..." />
                    <button className={styles.modernbutton} type="submit">Add</button>
                </div>
            </form>
    )
}