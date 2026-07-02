import React, { useContext } from 'react'
import Component1 from './Component1'
import { CounterContext } from '../context/counterContext'

const Button = () => {
    const value = useContext(CounterContext);
    return (
        <div>
            <button onClick={() => { value.setCount((count)=> count+1) }} ><span><Component1 /></span>I am Button</button>
            
        </div>
    )
}

export default Button
