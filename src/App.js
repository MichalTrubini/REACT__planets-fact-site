import Header from "./components/Header";
import Planets from "./components/Planets";

import { PlanetProvider } from "./assets/context/planet-context";

function App() {
  
  return (
      <div className="wrapper">
        <PlanetProvider>
          <Header />
          <Planets/>
        </PlanetProvider>
      </div>
  );
}

export default App;
