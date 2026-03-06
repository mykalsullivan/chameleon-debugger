import React from "react";
import Section from "../components/layout/Section";
import Row from "../components/layout/Row";
import Panel from "../components/layout/Panel";
import GameViewport from "../features/game/GameViewport";
import GameRuntimeControls from "../features/game/GameRuntimeControls";

function GameViewerPage(): React.JSX.Element
{
    return (
        <>
            <Section>
                <GameViewport />
            </Section>
            <Section>
                <Row>
                    <Panel title="Runtime Controls">
                        <GameRuntimeControls />
                    </Panel>
                </Row>
            </Section>
            <Section>
                <></>
            </Section>
        </>
    );
}

export default GameViewerPage;