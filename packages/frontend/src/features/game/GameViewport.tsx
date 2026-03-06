import React from "react";
import styles from "./GameViewport.module.css";
import GameCanvas from "./GameCanvas";

function GameViewport()
{
    return <div className={styles.viewport}><GameCanvas/></div>;
}

export default GameViewport;