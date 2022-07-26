import React, {useContext} from 'react';

import arrow from '../assets/images/icon-source.svg';
import '../assets/styles/css/planet.css';

import data from '../data.json';
import PlanetContext from '../assets/context/planet-context';
import InfoNav from './InfoNav';
import useWindowDimensions from '../functions/WindowDimensions';

const Planet = () => {

    const {planet} = useContext(PlanetContext);
    const {section} = useContext(PlanetContext);

    const imageSelect = () => {
        if (section === 'overview') return 'planet';
        if (section === 'structure') return 'internal';
        if (section === 'geology') return 'planet';
    }

    const { width } = useWindowDimensions();

    const indexPlanet = data.findIndex(element => element.name === planet);

    return ( 
        <main className='planet'>
            <div className="planet__content-container">
                <div className="planet__image-container">
                    <img src={data[indexPlanet].images[imageSelect()]} alt='mercury' className='planet__image'/>
                    {section === 'geology' && <img src={data[indexPlanet].images.geology} alt='mercury' className='planet__image-geology'/>}
                </div>
                <div className="planet__text-container">
                    <div className='planet__text'>
                        <h1 className='planet__name'>{data[indexPlanet].name}</h1>
                        <p className='planet__description'>
                            {data[indexPlanet][section].content}
                        </p>
                        <p><span className='planet__source'>Source:</span> <a href={data[indexPlanet][section].source} target='_blank' rel="noreferrer" className='planet__wikipedia-link'>Wikipedia</a><img src={arrow} alt="link to wiki" className='planet__arrow'/></p>
                    </div>
                    {(width > 525) && <InfoNav />}
                </div>
            </div>
            <div className="planet__stats-container">
                <div className='planet__stats'>
                    <p className='planet__stats-name'>rotation time</p>
                    <p className='planet__stats-number'>{data[indexPlanet].rotation}</p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>revolution time</p>
                    <p className='planet__stats-number'>{data[indexPlanet].revolution}</p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>radius</p>
                    <p className='planet__stats-number'>{data[indexPlanet].radius}</p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>average temp.</p>
                    <p className='planet__stats-number'>{data[indexPlanet].temperature}</p>
                </div>
            </div>
        </main> 
    );
}
 
export default Planet;