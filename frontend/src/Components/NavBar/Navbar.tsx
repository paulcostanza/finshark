import { Link } from 'react-router-dom'
import Logo from './logo.png'

interface Props { }

const Navbar = (props: Props) => {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <Link to="/">
                        <img src={Logo} alt='logo header for website of Finny showing off the goods' style={{ maxWidth: '300px' }} />
                    </Link>
                    <div><h2>Swimming in that money</h2></div>
                    <div className=" font-bold lg:flex">
                        <Link to="/search" className="text-black hover:text-darkBlue">
                            Search
                        </Link>
                    </div>


                </div>
                <div className=" lg:flex items-center space-x-6 text-back">
                    <Link to="/login" className="hover:text-darkBlue">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="px-8 py-3 font-bold rounded text-black bg-lightGreen hover:opacity-70"
                    >
                        Signup
                    </Link>
                </div>
                {/* {isLoggedIn() ? (
                    <div className="hidden lg:flex items-center space-x-6 text-back">
                        <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
                        <a
                            onClick={logout}
                            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                        >
                            Logout
                        </a>
                    </div>
                ) : (
                    <div className="hidden lg:flex items-center space-x-6 text-back">
                        <Link to="/login" className="hover:text-darkBlue">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                        >
                            Signup
                        </Link>
                    </div>
                )} */}
            </div>
        </nav>
    )
}

export default Navbar