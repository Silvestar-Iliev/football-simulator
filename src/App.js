import { Routes, Route } from "react-router-dom";


import { Header } from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>  
      <Header />
      <main id="main">
        <Routes>
            <Route path="/" element={<HomePage />}/>      

        </Routes>
      </main>   
    </>

  );
}

export default App;
