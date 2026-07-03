import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    return (
        <div>
            {console.log("Navbar is rendering")}
            I am {adjective} Navbar
            <button onClick={() => getAdjective()} >Change Me{ getAdjective()}</button>
        </div>
    )
}

export default memo(Navbar)
