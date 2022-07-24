import React, {useState, useContext } from 'react';

import '../assets/styles/css/header.css';
import hamburger from '../assets/images/icon-hamburger.svg';

import InfoNav from './InfoNav';
import MobileMenu from './MobileMenu';
import PlanetContext from '../assets/context/planet-context';

const Header = () => {

    const {ShowMenuHandler} = useContext(PlanetContext);
    const {menuVisible} = useContext(PlanetContext);
    const [userScroll, setUserScroll] = useState(false);

      document.addEventListener('scroll', function(e) {
        if (window.scrollY > 0) {
            setUserScroll(true);
          }
        else {setUserScroll(false)}
      });

    return (
        <>
            <header id="header" className='header'>
                <div className={userScroll ? 'header__container header__scroll' : 'header__container'}>
                    <nav className='header__nav'>
                        <div className="header__logo-container">
                            <h1 className="header__logo">the planets</h1>
                        </div>
                        <div className='header__hamburger-container'>
                            <img src={hamburger} alt="menu" onClick={ShowMenuHandler}/>
                        </div>
                    </nav>
                    <InfoNav/>
                </div>
            </header>
            <MobileMenu className={menuVisible === true ? 'mobile-menu mobile-menu__visible' : 'mobile-menu'}/>
        </>
    )
}

export default Header;