import React from 'react'
import { Link } from 'react-router'
import Logo from './logo.png'
import { useAuth } from '../../Context/useAuth'

type Props = {}

const Footer = (props: Props) => {
    const { isLoggedIn, logout } = useAuth();
    return (
        <footer className="bg-[#344d69] mt-20 border-t pt-6 text-center text-sm text-white">
            <div className='flex justify-center'>
                <img src={Logo} style={{ maxWidth: '100px' }} />
                <p>Swimming in that money</p>
            </div>


            <div className="flex justify-center gap-6 mt-4">
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/search">Search</Link>

                {isLoggedIn() ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}

            </div>

            <div className="mt-4">
                <p>Built by <a href='https://github.com/paulcostanza'>Paul Costanza</a></p>
                <a href="https://github.com/paulcostanza/finshark"> FinShark's GitHub</a>
            </div>

            <p className="mt-4 text-xs text-white-500 italic">
                *FinShark does not provide financial advice.
            </p>
        </footer>
    )
}

export default Footer