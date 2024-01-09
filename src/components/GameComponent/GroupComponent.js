import styles from "./GameComponent.module.css";

import React, { useState, useContext, useEffect } from "react";

import { StaticRowComponent } from "./RowComponents/StaticRowComponent";
import { DinamicRowComponent } from "./RowComponents/DinamicRowComponent";


const GroupComponent = ({
    group,
}) => {


    return (
        <section className={styles["group"]}>
            <h3>Group {group[0].group}</h3>
            <StaticRowComponent />
            {group.map(t => <DinamicRowComponent key={t.name} t={t} position={group.indexOf(t)}/>)}
        </section> 
    );
};

export default GroupComponent;