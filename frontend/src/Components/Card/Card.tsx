import React from 'react'
import SharkBro from '../../assets/shark-bro.png'
import './Card.css'

type Props = {}

const Card = (props: Props) => {
    return (
        <div className='card'>
            <img src={SharkBro} alt='Fin gets all the girls cause he has a ton of fat cash' />
            <div className="details">
                <h2>AAPL</h2>
                <p>$110</p>
            </div>
            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam necessitatibus magni voluptate earum architecto, ipsa, eveniet obcaecati cupiditate molestias voluptas rerum. Animi error ea libero quasi, perferendis odio vel!</p>
        </div>
    )
}

export default Card;