import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from 'react'
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import type { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e)
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result)) {
      setSearchResult(result)
    }

    console.log(result)
  };

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("e foo: ", e)
  }

  useEffect(() => {
    console.log(searchResult)
  }, [searchResult])

  return (
    <div className='App'>
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  )
}

export default App
