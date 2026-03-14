import React, { useEffect, useState } from 'react'
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio'
import CardList from '../../Components/CardList/CardList'
import type { PortfolioGet } from '../../Models/Portfolio'
import type { CompanySearch } from '../../company'
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService'
import { toast } from 'react-toastify'

type Props = {}

const PortfolioPage = (props: Props) => {
    const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    useEffect(() => {
        getPortfolio();
    }, [])

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

    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        portfolioAddAPI(e.target[0].value)
            .then((res) => {
                if (res?.status === 204) {
                    toast.success("Stock added to portfolio!")
                    getPortfolio();
                }
            }).catch((e) => {
                toast.warning("Could not create portfolio item!")
                console.log(e)
            })
    }

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        portfolioDeleteAPI(e.target[0].value)
            .then((res) => {
                if (res?.status === 200) {
                    toast.success("Stock deleted from portfolio!");
                    getPortfolio();
                }
            }).catch((e) => {
                toast.warning("Could not create portfolio item!")
                console.log(e)
            })
    }

    return (
        <div className='app'>
            <ListPortfolio
                portfolioValues={portfolioValues!}
                onPortfolioDelete={onPortfolioDelete}
            />
        </div>
    )
}

export default PortfolioPage