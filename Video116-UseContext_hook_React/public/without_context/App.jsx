import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar count={count} />
      <button onClick={()=>{setCount(count+1)}} >Click Me</button>
      <p>Count is {count}</p>
    </>
  )
}

export default App
