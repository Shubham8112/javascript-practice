import { useState } from "react";
function Newtodo(){
    const [inputtodo,settodoInput] = useState("");
    consr [todos , settodos] = useState([]);
    function addtodo(){
        if(inputtodo === ""){
            alert("empty todo")
        }
        settodos([...todos,inputtodo]);
        settodoInput('');
    }
    return (
        <>
            <input type="text" onChange={(e)=>settodoInput(e.target.value)}/>
            <button onClick={addtodo}></button>
        </>
    )
}