import styles from "./GameComponent.module.css";

import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { GameContext } from "../../contexts/GameContext";

import GroupComponent from "./GroupComponent";



const GameComponent = () => {
    const { teams, selectedTeam } = useContext(GameContext);
    const [groups, setGroups] = useState([]);



    return (
 
        <div className={styles["game"]}>
            {!selectedTeam && <Link to="/"><p>Select team by Home page before start competition.</p></Link>}    
            <h1>Groups</h1>
            <section className={styles["groups"]}>

                {Object.values(teams).map(gr => <GroupComponent key={gr[0].group} group={gr} />)}

            </section>
        </div>

    );
};

export default GameComponent;