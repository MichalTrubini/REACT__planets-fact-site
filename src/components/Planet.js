import mercury from '../assets/images/planet-mercury.svg'

const Planet = () => {
    return ( 
        <main>
            <div className="planet__content-container">
                <div className="planet__image-container">
                    <img src={mercury} alt='mercury'/>
                </div>
                <div className="planet__text-container">
                    <div className='planet__text'>
                        <h1 className='planet__name'>Mercury</h1>
                        <p className='planet__description'>
                            Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
                        </p>
                        <p><span>Source:</span> <a href='something'>Wikipedia</a></p>
                    </div>
                </div>
            </div>
            <div className="planet__stats-container">
                <div className='planet__stats'>
                    <p className='planet__stats-name'>rotation time</p>
                    <p className='planet__stats-number'>58.6 days</p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>revolution time</p>
                    <p className='planet__stats-number'>87.97 days</p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>radius</p>
                    <p className='planet__stats-number'>2439.7 km</p>
                </div>
                <div className='planet__stats'>
                    <p className='planet__stats-name'>average temp.</p>
                    <p className='planet__stats-number'>430°C</p>
                </div>
            </div>
        </main> 
    );
}
 
export default Planet;