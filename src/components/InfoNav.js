import React, {useContext} from 'react';
import PlanetContext from '../assets/context/planet-context';

import '../assets/styles/css/infonav.css';

const InfoNav = () => {
    
    const {PlanetSectionHandler} = useContext(PlanetContext);

    return (
        <div className='info-nav'>
            <ul className='info-nav__list'>
                <li id='overview' className='info-nav__item' onClick={PlanetSectionHandler}>overview</li>
                <li id='structure' className='info-nav__item' onClick={PlanetSectionHandler}>structure</li>
                <li id='geology' className='info-nav__item' onClick={PlanetSectionHandler}>surface</li>
            </ul>
        </div>
    )
}

export default InfoNav;