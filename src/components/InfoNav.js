import React, {useContext} from 'react';
import PlanetContext from '../assets/context/planet-context';

import '../assets/styles/css/infonav.css';

const InfoNav = () => {
    
    const {PlanetSectionHandler} = useContext(PlanetContext);
    const {section} = useContext(PlanetContext);
    const {planet} = useContext(PlanetContext);

    const classSelector = () => {
        if (planet === 'Mercury') return 'info-nav__selected-mercury';
        if (planet === 'Venus') return 'info-nav__selected-venus';
        if (planet === 'Earth') return 'info-nav__selected-earth';
        if (planet === 'Mars') return 'info-nav__selected-mars';
        if (planet === 'Jupiter') return 'info-nav__selected-jupiter';
        if (planet === 'Saturn') return 'info-nav__selected-saturn';
        if (planet === 'Uranus') return 'info-nav__selected-uranus';
        if (planet === 'Neptune') return 'info-nav__selected-neptune';
    }

    return (
        <div className='info-nav'>
            <ul className='info-nav__list'>
                <li id='overview' className={section === 'overview' ? ('info-nav__item info-nav__selected ' + classSelector()) : 'info-nav__item'} onClick={PlanetSectionHandler}>overview</li>
                <li id='structure' className={section === 'structure' ? ('info-nav__item info-nav__selected ' + classSelector()) : 'info-nav__item'} onClick={PlanetSectionHandler}>structure</li>
                <li id='geology' className={section === 'geology' ? ('info-nav__item info-nav__selected ' + classSelector()) : 'info-nav__item'} onClick={PlanetSectionHandler}>surface</li>
            </ul>
        </div>
    )
}

export default InfoNav;