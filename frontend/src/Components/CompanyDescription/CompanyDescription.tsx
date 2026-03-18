import React, { useEffect, useState } from 'react'
import type { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import { useParams } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';

interface Props { }

const CompanyDescription = (props: Props) => {
    const [company, setCompany] = useState<CompanyProfile>();
    let { ticker } = useParams();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }

        getProfileInit();
    }, [])

    return (
        <>
            {
                company ? (
                    <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4' >
                        {company.description}
                    </p >
                ) : (
                    <Spinner />
                )}
        </>
    )
}

export default CompanyDescription