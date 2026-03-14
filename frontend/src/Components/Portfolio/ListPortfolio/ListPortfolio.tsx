import type { SyntheticEvent } from 'react';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import type { PortfolioGet } from '../../../Models/Portfolio';

interface Props {
    portfolioValues: PortfolioGet[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
    return (
        <>
            <section id="portfolio">
                <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
                    My Portfolio
                </h2>
                <div className='max-w-6xl mx-auto'>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
                        <>
                            {portfolioValues.length > 0 ? (
                                portfolioValues.map((portfolioValue) => {
                                    return (
                                        <CardPortfolio
                                            key={portfolioValue.symbol}
                                            portfolioValue={portfolioValue}
                                            onPortfolioDelete={onPortfolioDelete}
                                        />
                                    );
                                })
                            ) : (
                                <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                                    Your portfolio is empty.
                                </h3>
                            )}
                        </>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ListPortfolio