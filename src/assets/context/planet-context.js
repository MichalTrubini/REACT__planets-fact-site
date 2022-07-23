import React, {useState} from "react";

const PlanetContext = React.createContext();

export function PlanetProvider({children})  {

    const [planet, setPlanet] = useState('Mercury');
    const [menuVisible, setMenuVisible] = useState(false);
    const [section, setSection] = useState('overview');

    const ShowMenuHandler = () => {
        setMenuVisible(prevValue => !prevValue);
    }

    const SetPlanetHandler = (event) => {
        setPlanet(event.target.id)
    }

    const PlanetSectionHandler = (event) => {
        setSection(event.target.id)
    }

    return (
        <PlanetContext.Provider value={{planet, menuVisible, section, SetPlanetHandler, ShowMenuHandler, PlanetSectionHandler}}>
            {children}
        </PlanetContext.Provider>
    )
}

export default PlanetContext;