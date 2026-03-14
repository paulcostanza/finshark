import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from 'react'
import type { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../Components/NavBar/Navbar';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import Search from '../../Components/Search/Search';
import type { PortfolioGet } from '../../Models/Portfolio';
import { toast } from 'react-toastify';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService';
import onPortfolioCreate from '../PortfolioPage/PortfolioPage'

interface Props { }

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);

    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e)
    }

    const getPortfolio = () => {
        portfolioGetAPI()
            .then((res) => {
                if (res?.data) {
                    setPortfolioValues(res?.data);
                }
            }).catch((e) => {
                toast.warning("Could not get portfolio values!")
                console.log(e)
            })
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

    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        portfolioAddAPI(e.target[0].value)
            .then((res) => {
                console.log("Here foo:", res?.status)
                if (res?.status === 204) {
                    toast.success("Stock added to portfolio!")
                    getPortfolio();
                }
            }).catch((e) => {
                toast.warning("Could not create portfolio item!")
                console.log(e)
            })
    }
    useEffect(() => {
        console.log(searchResult)
    }, [searchResult])


    return (
        <div className='App'>
            {/* <Hero /> */}
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

export default SearchPage