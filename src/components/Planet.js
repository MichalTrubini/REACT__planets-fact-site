import mercury from '../assets/images/planet-mercury.svg'
import '../assets/styles/css/planet.css';

const Planet = () => {
    return ( 
        <main className='planet'>
            <div className="planet__content-container">
                <div className="planet__image-container">
                    <img src={mercury} alt='mercury' className='planet__image'/>
                </div>
                <div className="planet__text-container">
                    <div className='planet__text'>
                        <h1 className='planet__name'>Mercury</h1>
                        <p className='planet__description'>
                            Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
                        </p>
                        <p><span className='planet__source'>Source:</span> <a href='something' className='planet__wikipedia-link'>Wikipedia</a></p>
                    </div>
                </div>
            </div>
            <div className="planet__stats-container">
                <div className='planet__stats'>
                    <p className='planet__stats-name'>rotation time</p>
                    <p className='planet__stats-number'>58.6<span className='planet__stats-unit'> days</span></p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>revolution time</p>
                    <p className='planet__stats-number'>87.97<span className='planet__stats-unit'> days</span></p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>radius</p>
                    <p className='planet__stats-number'>2439.7<span className='planet__stats-unit'> km</span></p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>average temp.</p>
                    <p className='planet__stats-number'>430<span className='planet__stats-unit'>°C</span></p>
                </div>
            </div>
        </main> 
    );
}
 
export default Planet;