import { Link } from 'react-router-dom'
import Logo from './logo.png'
import { useAuth } from '../../Context/useAuth';
import './Navbar.css'

interface Props { }

const Navbar = (props: Props) => {
    const { isLoggedIn, user } = useAuth();

    return (
        <nav className="nav">
            <div className="logo-and-subtitle">
                <Link to="/">
                    <img src={Logo} alt='logo header for website of Finny showing off the goods' style={{ maxWidth: '300px' }} />
                </Link>
                <div>
                    <h2>Swimming in that cash</h2>
                </div>
            </div>

            <div className="">
                {isLoggedIn() ? (
                    <div className="welcome-and-buttons">
                        <div>Welcome, {user?.userName}!</div>

                        <div className='flex gap-4'>
                            <Link to='/portfolio' className='button left-button'>
                                Portfolio</Link>

                            <Link to="/search" className='button right-button'>
                                Search
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <Link to="/login" className='button left-button'>
                            Login
                        </Link>
                        <Link to="/register" className='button right-button'>
                            Signup
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar