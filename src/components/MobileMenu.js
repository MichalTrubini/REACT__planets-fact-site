import React, { useContext} from 'react';
import PlanetContext from '../assets/context/planet-context';

import chevron from '../assets/images/icon-chevron.svg';
import '../assets/styles/css/mobile-menu.css';

const MobileMenu = (props) => {

    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    const {SetPlanetHandler} = useContext(PlanetContext);
    const {ShowMenuHandler} = useContext(PlanetContext);
    
    return ( 
            <div className={props.className}>
                <ul className='mobile-menu__list'>
                {planets.map(planet => 
                    <li className='mobile-menu__item' key={planet}>
                        <div className='mobile-menu__container'>
                            <div className='mobile-menu__dot' id={planet+'-color'}></div>
                            <p id={planet} className='mobile-menu__planet' onClick={(event) => {SetPlanetHandler(event); ShowMenuHandler()}}>{planet}</p>
                        </div>
                        <img src={chevron} alt='arrow' className='mobile-menu__img'/>
                    </li>
                     ) }
                </ul>
            </div>
     );
}
 
export default MobileMenu;