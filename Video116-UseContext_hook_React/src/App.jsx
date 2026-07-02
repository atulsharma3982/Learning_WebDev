import { useState } from 'react'
import Navbar from './components/Navbar'
import { CounterContext } from './context/counterContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterContext.Provider value={{count,setCount}}>
        
      <Navbar />
      <button onClick={()=>{setCount((count)=>count+1)}} >Click Me</button>
      <p>Count is {count}</p>
      </CounterContext.Provider>
    </>
  )
}

export default App
