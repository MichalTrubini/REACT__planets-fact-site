import React, {useEffect, useContext} from 'react';
import PlanetContext from '../assets/context/planet-context';

import chevron from '../assets/images/icon-chevron.svg';
import '../assets/styles/css/mobile-menu.css';

const MobileMenu = (props) => {

    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    useEffect(() => {
        const headerHeight = document.getElementById('header').clientHeight;
        const screenHeight = window.innerHeight;
        const menuHeight = screenHeight - headerHeight;
    })

    const {SetPlanetHandler} = useContext(PlanetContext);
    const {ShowMenuHandler} = useContext(PlanetContext);
    

    return ( 
            <div style={props.style} className='mobile-menu'>
                <ul className='mobile-menu__list'>
                {planets.map(planet => 
                    <li className='mobile-menu__item' key={planet}>
                        <div className='mobile-menu__container'>
                            <div className='mobile-menu__dot' id={planet+'-color'}></div>
                            <p id={planet} className='mobile-menu__planet' onClick={(event) => {SetPlanetHandler(event); ShowMenuHandler()}}>{planet}</p>
                        </div>
                        <img src={chevron} alt='arrow'/>
                    </li>
                     ) }
                </ul>
            </div>
     );
}
 
export default MobileMenu;