import styles from "./HomeComponent.module.css";

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./logo4.png";


import { GameContext } from "../../contexts/GameContext";


const HomeComponent = () => {
  const {teams, setSelectedTeam, onSelectTeam} = useContext(GameContext);

  const [greeting, setGreeting] = useState("Welcome to EURO 2024 simulator game!");
  

  return (
    <div className={styles["home-page"]}>
      <img src={logo} alt="logo EURO 2024" />
      <h1>EURO 2024 simulator</h1>
      <p>
        {greeting}
      </p>
      <select
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        <option value="">Select a team</option>
        {Object.values(teams)
                .map(gr => gr.map(x => <option key={x.name} value={x.name}> {x.name} </option>))}
      </select>
      <Link to="/game">
        <button>Start the game</button>
      </Link>
    </div>
  );
};

export default HomeComponent;