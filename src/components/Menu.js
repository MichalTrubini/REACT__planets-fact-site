import React, { useContext} from 'react';
import PlanetContext from '../assets/context/planet-context';

import chevron from '../assets/images/icon-chevron.svg';
import '../assets/styles/css/menu.css';

const Menu = (props) => {

    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    const {SetPlanetHandler} = useContext(PlanetContext);
    const {ShowMenuHandler} = useContext(PlanetContext);
    
    return ( 
            <div className={props.className}>
                <ul className='menu__list'>
                {planets.map(planet => 
                    <li className='menu__item' key={planet}>
                        <div className='menu__container'>
                            <div className='menu__dot' id={planet+'-color'}></div>
                            <p id={planet} className='menu__planet' onClick={(event) => {SetPlanetHandler(event); ShowMenuHandler()}}>{planet}</p>
                        </div>
                        <img src={chevron} alt='arrow' className='menu__img'/>
                    </li>
                     ) }
                </ul>
            </div>
     );
}
 
export default Menu;