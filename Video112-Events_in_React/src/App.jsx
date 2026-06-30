import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({})
  const handleClick = () => {
    alert("Clicked");
  }
  const handleMouseOver = () => {
    alert("Hovered");
  }
  const handleForm = (e) => {
    setForm({...form,
      [e.target.name]:e.target.value
    })
    console.log(form);
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
        <div className="hove" onMouseOver={handleMouseOver}>Hover me</div>
      </div>
      <input type="text" name="email" value={form.email?form.email:""} onChange={handleForm} />
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleForm} />
    </>
  )
}

export default App
