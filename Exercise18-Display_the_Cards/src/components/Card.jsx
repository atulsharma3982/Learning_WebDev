import React from 'react'
import "../App.css"

const Card = ({ dataa }) => {
    return (
        <div className='border-2 rounded-xl w-xl h-xl bg-amber-950 text-white border-black p-6'>
            <div className="title font-bold">
                {dataa.title}
            </div>
            <div className="desc"> 
                {dataa.body}
            </div>
        </div>
    )
}

export default Card
