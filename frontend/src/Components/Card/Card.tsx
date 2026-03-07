import type { JSX } from 'react';
import SharkBro from '../../assets/shark-bro.png'
import './Card.css'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
    return (
        <div className='card'>
            <img src={SharkBro} alt='Fin gets all the girls cause he has a ton of fat cash' />
            <div className="details">
                <h2>{companyName} - {ticker}</h2>
                <p>${price}</p>
            </div>
            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam necessitatibus magni voluptate earum architecto, ipsa, eveniet obcaecati cupiditate molestias voluptas rerum. Animi error ea libero quasi, perferendis odio vel!</p>
        </div>
    )
}

export default Card;