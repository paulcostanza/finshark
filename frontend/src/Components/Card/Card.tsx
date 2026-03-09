import type { JSX, SyntheticEvent } from 'react';
import SharkBro from '../../assets/shark-bro.png'
import './Card.css'
import type { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
    id: string;
    searchResults: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResults, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div className='card' id={id} key={id}>
            <img src={SharkBro} alt='Fin gets all the girls cause he has a ton of fat cash' />
            <div className="details">
                <h2>{searchResults.name} - {searchResults.symbol}</h2>
                <p>${searchResults.currency}</p>
            </div>
            <p className='info'>{searchResults.exchangeShortName} - {searchResults.stockExchange}</p>
            <AddPortfolio
                onPortfolioCreate={onPortfolioCreate}
                symbol={searchResults.symbol}
            />
        </div>
    )
}

export default Card;