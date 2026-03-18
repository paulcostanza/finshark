import React, { useEffect, useState } from 'react'
import type { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';

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
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <Sidebar />
                    <CompanyDashboard
                        ticker={ticker!}
                    >
                        <Tile title='Company name' subTitle={company.companyName} />
                        <Tile title='Price' subTitle={"$" + (company.price?.toString() ?? "N/A")} />
                        {/* Where is DCf?! lol */}
                        {/* <Tile title='DCF' subTitle={company.dcf?.toString() ?? "N/A"} /> */}
                        <Tile title='Sector' subTitle={company.sector} />
                    </CompanyDashboard>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default CompanyPage