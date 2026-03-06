import React from "react";
import styles from "./GameRuntimeControls.module.css"
import Button from "../../components/ui/Button";
import FileUploadButton from "../../components/ui/FileUploadButton";
import ButtonGroup from "../../components/layout/ButtonGroup";

function GameRuntimeControls(): React.JSX.Element
{
    return (
        <div className={styles.controls}>
            <ButtonGroup>
                <Button>Start</Button>
                <Button>Stop</Button>
                <FileUploadButton onFile={() => {}} accept={".cpkg"} label={"Game package..."}/>
            </ButtonGroup>
        </div>
    );
}

export default GameRuntimeControls;