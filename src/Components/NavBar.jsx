import { Link } from "react-router-dom";
import logo from '../Images/logo.svg'

const NavBar = () =>{
    return(
    <div className="navContainer">
        <nav className="nav" expand="md">
            <div className="logoDiv">
                <img src={logo} className='logo' alt='logo' />
            </div>
            <div className="navLinkDiv">
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/blogs'>Blogs</Link>
                <Link className='navLink' to='/about'>About</Link>
                <Link className='navLink' to='/contact'>Contact</Link>
                <Link className='navLink' to='/login'>Login</Link>
            </div>
        </nav>
    </div>
    );
}
export default NavBar;