import { Routes, Route } from "react-router-dom";

import { GameProvider } from "./contexts/GameContext";


import Header from "./components/Header/Header";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import GameComponent from "./components/GameComponent/GameComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";

function App() {
  return (
    <>  
      <GameProvider>
        <Header />
        <main id="main">
          <Routes>
              <Route path="/" element={<HomeComponent />}/>      
              <Route path="/game" element={<GameComponent />}/>   
              <Route path="/about" element={<AboutComponent />}/>   
          </Routes>
        </main>         
      </GameProvider>
    </>

  );
}

export default App;
