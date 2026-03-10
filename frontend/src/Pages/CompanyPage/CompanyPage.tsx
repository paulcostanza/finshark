import React, { useEffect, useState } from 'react'
import type { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import { useParams } from 'react-router-dom';

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
                <div>{company.companyName}</div>
            ) : (
                <div>Company not found!</div>
            )}
        </>
    )
}

export default CompanyPage