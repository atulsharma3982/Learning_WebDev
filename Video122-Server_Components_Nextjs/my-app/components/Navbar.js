"use client"
import React, { useState } from 'react'
// import fs from "fs/promises"
const Navbar = () => {
    const [count, setCount] = useState(0)
    console.log(count)
    return (
        <div>
            I am Navbar Client {count}<br></br>
            <button className='cursor-pointer' onClick={() => { setCount(count + 1) }}>Click me</button>
        </div>
    )
}

export default Navbar
