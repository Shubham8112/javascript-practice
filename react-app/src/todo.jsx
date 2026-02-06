import { useState } from "react"

function Todo() {
    const [todoInput, settodoInput] = useState("");
    const [todos, settodos] = useState([]);
    function addTodo() {
        if (todoInput.trim() === "") {
            alert("cant add empty todo")
        };
        settodos([...todos, todoInput]);
        settodoInput("");
    }
    return (
        <>
            <div>
                <input type="text" onChange={(e) => settodoInput(e.target.value)} />
                <button onClick={addTodo} >Add Todo</button>
            </div>
            <h2>Your Todo</h2>
            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}

            {[<p>shubham</p>,<p>pandey</p>]}
        </>
    )
}
export default Todo;