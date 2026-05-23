import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <div className='card' style={{overflow:"hidden"}}>
            <img src="https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg" alt="dog" width={333} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
