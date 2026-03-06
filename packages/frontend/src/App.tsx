import React from "react";
import "./Reset.module.css";
import "./Global.module.css";
import { Helmet } from "react-helmet";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import GameViewerPage from "./pages/GameViewerPage";

function App() : React.JSX.Element
{
    return (
        <>
            <Helmet>
                <title>Chameleon Engine</title>
                <link rel={"icon"} href={"/Assets/Images/favicon.png"} />
            </Helmet>
            <Header />
            <Main>
                <GameViewerPage />
            </Main>
            <Footer />
        </>
    );
}

export default App;