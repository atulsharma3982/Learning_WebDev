import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(2)
  // let a = 2;

  return (
    <div className='counter'>
      {//This won't do anything because a once rendered the value will cahnge on click but it won't reflect on the screen once rendered
      
      /* <div>Count is {a}</div>
      <button onClick={()=>{a=a+1}}>Change count</button> */}
      <div>Count is {count}</div>
      <button onClick={()=>{setCount(count**2)}}>Change count</button>
    </div>
  )
}

export default App
