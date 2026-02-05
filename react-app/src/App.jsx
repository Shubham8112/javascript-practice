import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>React Counter</p>
      <div>
        <button onClick={() =>setCount(count+1)}>+</button>
        {count}
        <button>-</button>
      </div>
    </div>
  )
}

export default App
