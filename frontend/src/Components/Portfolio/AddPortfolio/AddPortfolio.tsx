import { type SyntheticEvent } from 'react'

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

// const onPortfolioCreate = () => { }

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
    return (
        <form onSubmit={onPortfolioCreate}>
            <input readOnly={true} hidden={true} value={symbol} />
            <button
                type="submit"
                className="block w-full p-3 text-white duration-200 border-2 rounded-lg bg-[#7ed957] hover:text-[#7ed957] hover:bg-white! border-[#7ed957] font-bold cursor-pointer width"
            >
                Add to Portfolio
            </button>
        </form>
    )
}

export default AddPortfolio;