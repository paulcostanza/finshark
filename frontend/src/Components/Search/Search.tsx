import type { ChangeEvent, JSX, SyntheticEvent } from 'react'
import React from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onClick, search, handleChange }: Props): JSX.Element => {


    return (
        <div>
            <input id='search' value={search} onChange={(e) => handleChange(e)}></input>
            <button onClick={(e) => onClick(e)} />
        </div>
    )
}

export default Search