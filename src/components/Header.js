import React, {useState, useContext } from 'react';

import '../assets/styles/css/header.css';
import hamburger from '../assets/images/icon-hamburger.svg';

import InfoNav from './InfoNav';
import Menu from './Menu';
import PlanetContext from '../assets/context/planet-context';
import useWindowDimensions from '../functions/WindowDimensions';

const Header = () => {

    const {ShowMenuHandler} = useContext(PlanetContext);
    const {menuVisible} = useContext(PlanetContext);
    const [userScroll, setUserScroll] = useState(false);

    const {width} = useWindowDimensions();

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
                            <p className="header__logo">the planets</p>
                        </div>
                        <div className='header__hamburger-container'>
                            <img src={hamburger} alt="menu" onClick={ShowMenuHandler}/>
                        </div>
                    </nav>
                    {(width < 525) && <InfoNav/>}
                    <Menu className={menuVisible === true ? 'menu menu__visible' : 'menu'}/>
                </div>
                
            </header>
        </>
    )
}

export default Header;