import styles from "./HomePage.module.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const HomePage = () => {
  const [greeting, setGreeting] = useState("Добре дошли на Евро 2024!");
  const [selectedTeam, setSelectedTeam] = useState("");

  return (
    <div className={styles["home-page"]}>
      <img src={logo} alt="Лого на Евро 2024" />
      <h1>Евро 2024</h1>
      <p>
        {greeting}
      </p>
      <select
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        <option value="">Изберете отбор</option>
        <option value="България">България</option>
        <option value="Испания">Испания</option>
        <option value="Германия">Германия</option>
        <option value="Франция">Франция</option>
      </select>
      <Link to="/game">
        <button>Започни играта</button>
      </Link>
    </div>
  );
};

export default HomePage;