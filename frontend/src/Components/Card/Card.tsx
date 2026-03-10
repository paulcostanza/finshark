import type { JSX, SyntheticEvent } from 'react';
import SharkBro from '../../assets/shark-bro.png'
import './Card.css'
import type { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    searchResults: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResults, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
            key={id}
            id={id}
        >
            <img src={SharkBro} alt='Fin gets all the girls cause he has a ton of fat cash' />
            <Link
                to={`/company/${searchResults.symbol}/company-profile`}
                className="font-bold text-center text-veryDarkViolet md:text-left"
            >
                {searchResults.name} ({searchResults.symbol})
            </Link>
            <div className="details">
                <h2>{searchResults.name} - {searchResults.symbol}</h2>
                <p>${searchResults.currency}</p>
            </div>
            <p className="text-veryDarkBlue">{searchResults.currency}</p>
            <p className="font-bold text-veryDarkBlue">
                {searchResults.exchangeShortName} - {searchResults.stockExchange}
            </p>
            <AddPortfolio
                onPortfolioCreate={onPortfolioCreate}
                symbol={searchResults.symbol}
            />
        </div>
    )
}

export default Card;