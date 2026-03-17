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
            className="flex flex-row items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row block w-full py-3 text-black duration-200 border-2 rounded-lg bg-black-500 hover:text-black-500 hover:bg-white border-black-500 font-bold cursor-pointer mb-5 max-w-4xl mx-auto p-6"
            key={id}
            id={id}
        >
            <Link
                to={`/company/${searchResults.symbol}/company-profile`}
                className="font-bold text-center text-veryDarkViolet md:text-left hover:bg-grey  rounded-lg duration-200"
            >
                {searchResults.name} ({searchResults.symbol})
            </Link>
            {/* <p className="text-veryDarkBlue">{searchResults.currency}</p> */}
            {/* <p className="font-bold text-veryDarkBlue">
                {searchResults.exchangeShortName} - {searchResults.stockExchange}
            </p> */}
            {/* <p>Current Price: {searchResults.price}</p> */}
            <AddPortfolio
                onPortfolioCreate={onPortfolioCreate}
                symbol={searchResults.symbol}
            />
        </div>
    )
}

export default Card;