import { useState } from 'react';
import './App.css'
import Message from './msg';

function App() {
  const [count,setCount] = useState(0)
  const [text,settext] = useState(' ')

  let name = 'shubham';
  // let count = 0;
  // function inscCount(){
  //   count +=1;
  //   console.log(count);
  // }

  return (
    <>
    <div className="container">
        <div className='div'>
          <h1>Hello World</h1>
          <p>hello {name}</p>
          <Message></Message>
          <p>Count: {count}</p>
          <button onClick={()=>setCount(count+1)}>Increase Count</button>
          <User name = 'Pandey'/>
          <input type="text" onChange={(e)=> settext(e.target.value)} />
          <p>Input value: {text}</p>
        </div>
    </div>
    </>
  )
}

function User(props){
  return(
    <>
    <p>Hello {props.name}</p>
    </>
  )
}
export default App
