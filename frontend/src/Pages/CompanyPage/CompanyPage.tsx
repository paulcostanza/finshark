import React, { useEffect, useState } from 'react'
import type { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

interface Props { }

const CompanyPage = (props: Props) => {
    // https:localhost:3000/
    let { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }

        getProfileInit();
    }, [])

    return (
        <>
            {company ? (
                <div className="w-full relative flex">
                    <Sidebar />
                    <CompanyDashboard
                        ticker={ticker!}
                    >
                        <Tile title='company name' subTitle='fart' />
                    </CompanyDashboard>
                </div>
            ) : (
                <div>Company not found!</div>
            )}
        </>
    )
}

export default CompanyPage