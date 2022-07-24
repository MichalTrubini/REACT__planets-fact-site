import React, {useContext} from 'react';
import PlanetContext from '../assets/context/planet-context';

import useWindowDimensions from '../functions/WindowDimensions';

import '../assets/styles/css/infonav.css';

const InfoNav = () => {
    
    const {PlanetSectionHandler} = useContext(PlanetContext);
    const {section} = useContext(PlanetContext);
    const {planet} = useContext(PlanetContext);

    const {width} = useWindowDimensions();

    const screenBreak = 525;

    const classSelector = () => {
        if (planet === 'Mercury' & width < screenBreak) return 'info-nav__selected-mercury-mob';
        if (planet === 'Venus' & width < screenBreak) return 'info-nav__selected-venus-mob';
        if (planet === 'Earth' & width < screenBreak) return 'info-nav__selected-earth-mob';
        if (planet === 'Mars' & width < screenBreak) return 'info-nav__selected-mars-mob';
        if (planet === 'Jupiter' & width < screenBreak) return 'info-nav__selected-jupiter-mob';
        if (planet === 'Saturn' & width < screenBreak) return 'info-nav__selected-saturn-mob';
        if (planet === 'Uranus' & width < screenBreak) return 'info-nav__selected-uranus-mob';
        if (planet === 'Neptune' & width < screenBreak) return 'info-nav__selected-neptune-mob';

        if (planet === 'Mercury' & width > screenBreak) return 'info-nav__selected-mercury';
        if (planet === 'Venus' & width > screenBreak) return 'info-nav__selected-venus';
        if (planet === 'Earth' & width > screenBreak) return 'info-nav__selected-earth';
        if (planet === 'Mars' & width > screenBreak) return 'info-nav__selected-mars';
        if (planet === 'Jupiter' & width > screenBreak) return 'info-nav__selected-jupiter';
        if (planet === 'Saturn' & width > screenBreak) return 'info-nav__selected-saturn';
        if (planet === 'Uranus' & width > screenBreak) return 'info-nav__selected-uranus';
        if (planet === 'Neptune' & width > screenBreak) return 'info-nav__selected-neptune';
    }

    return (
        <div className='info-nav'>
            <ul className='info-nav__list'>
                <li id='overview' className={section === 'overview' ? ('info-nav__item info-nav__selected ' + classSelector()) : 'info-nav__item'} onClick={PlanetSectionHandler}><span className='info-nav__section-number'>01</span>overview</li>
                <li id='structure' className={section === 'structure' ? ('info-nav__item info-nav__selected ' + classSelector()) : 'info-nav__item'} onClick={PlanetSectionHandler}><span className='info-nav__section-number'>02</span>structure</li>
                <li id='geology' className={section === 'geology' ? ('info-nav__item info-nav__selected ' + classSelector()) : 'info-nav__item'} onClick={PlanetSectionHandler}><span className='info-nav__section-number'>03</span>surface</li>
            </ul>
        </div>
    )
}

export default InfoNav;