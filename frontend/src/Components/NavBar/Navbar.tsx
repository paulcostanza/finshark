import { Link } from 'react-router-dom'
import Logo from './logo.png'
import { useAuth } from '../../Context/useAuth';

interface Props { }

const Navbar = (props: Props) => {
    const { isLoggedIn, user, logout } = useAuth();

    return (
        <nav className="relative container mx-auto mt-10 p-1">
            <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center ">
                    <Link to="/">
                        <img src={Logo} alt='logo header for website of Finny showing off the goods' style={{ maxWidth: '300px' }} />
                    </Link>
                    <div>
                        <h2>Swimming in that money</h2>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    {isLoggedIn() ? (
                        <div className="flex flex-col items-center gap-4">
                            <div>Welcome, {user?.userName}!</div>

                            <div className='flex gap-4'>
                                <a onClick={logout} className='bg-[#0b5fa5] text-white px-4 py-2 rounded'>
                                    Logout
                                </a>

                                <Link to="/search" className='bg-[#39b54a] text-white px-4 py-2 rounded'>
                                    Search
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/login">
                                Login
                            </Link>
                            <Link to="/register">
                                Signup
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    )
}

export default Navbar