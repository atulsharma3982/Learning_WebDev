import React from 'react'
import { useEffect } from 'react'
const Navbar = ({ color }) => {
    //case 1: Runs on every render
    useEffect(() => {
        alert("Runs on every render")
    })

    // case 2: Run only on first render or page reload
    useEffect(() => {
        alert("Hey! You came to my page")
    }, [])

    //Case 3: Runs only when certain values change
    useEffect(() => {
        alert("Color Changed")
    }, [color])

    // Example of Cleanup function
    useEffect(() => {
        

        return () => {
            alert("Component removed")
        }
    }, [])


    return (
        <div>
            I am navbar with {color} color
        </div>
    )
}

export default Navbar
