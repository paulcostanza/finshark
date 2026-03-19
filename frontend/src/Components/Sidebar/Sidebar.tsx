import React from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale, FaDollarSign, FaHome, FaInfoCircle, FaMoneyBillWave } from 'react-icons/fa'

interface Props { }

const Sidebar = (props: Props) => {
    return (
        <nav className='fixed top-0 left-0 h-screen w-64 p-4 flex flex-col'>

            {/* Menu */}
            <div className='flex flex-row gap-2'>
                <div className=''>
                    <div className='flex flex-row gap-2'>
                        <Link
                            to='company-description'
                            className='flex items-center gap-3 text-gray-400 uppercase font-bold py-3 no-underline hover:text-black'>
                            <FaHome size={30} />
                            <span>Description</span>
                        </Link>
                        <Link
                            to='company-profile'
                            className='flex items-center gap-3 text-gray-400 uppercase font-bold py-3 no-underline hover:text-black'>
                            <FaInfoCircle size={18} />
                            <span>Company Profile</span>
                        </Link>
                        <Link
                            to='income-statement'
                            className='flex items-center gap-3 text-gray-400 uppercase font-bold py-3 no-underline hover:text-black'>
                            <FaDollarSign size={17} />
                            <span>Income Statement</span>
                        </Link>
                        <Link
                            to='balance-sheet'
                            className='flex items-center gap-3 text-gray-400 uppercase font-bold py-3 no-underline hover:text-black'>
                            <FaBalanceScale size={20} />
                            <span>Balance Sheet</span>
                        </Link>
                        <Link
                            to='cashflow-statement'
                            className='flex items-center gap-3 text-gray-400 uppercase font-bold py-3 no-underline hover:text-black'>
                            <FaMoneyBillWave size={30} />
                            <span>Cashflow</span>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar