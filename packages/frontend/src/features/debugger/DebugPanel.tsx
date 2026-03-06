import React from "react";
import styles from "./DebugPanel.module.css";

function DebugPanel() : React.JSX.Element
{
    return (
        <div className={styles.panel}>
            <h1>Debugger</h1>
            <p>This will display engine debug information at some point.</p>
        </div>
    );
}

export default DebugPanel;