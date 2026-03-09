import type { JSX, SyntheticEvent } from 'react'
import Card from '../Card/Card'
import type { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card
                            id={result.symbol}
                            key={uuidv4()}
                            searchResults={result}
                            onPortfolioCreate={onPortfolioCreate}
                        />
                    )
                })
            ) : (
                <h1>No results...</h1>
            )}
            {/* <Card
                companyName='Apple'
                ticker='AAPL'
                price={100}
            />
            <Card
                companyName='Microsoft'
                ticker='MSFT'
                price={200}
            />
            <Card
                companyName='Tesla'
                ticker='TSLA'
                price={300}
            /> */}

        </div>
    )
}

export default CardList