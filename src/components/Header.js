import '../assets/styles/css/header.css';
import hamburger from '../assets/images/icon-hamburger.svg'
import InfoNav from './InfoNav';

const Header = () => {
    return (
        <header>
            <nav className='header__nav'>
                <div className="header__logo-container">
                    <h1 className="header__logo">the planets</h1>
                </div>
                <div className='header__hamburger-container'>
                    <img src={hamburger} alt="menu" />
                </div>
            </nav>
            <InfoNav/>
        </header>
    )
}

export default Header;