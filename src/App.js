import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";

function App() {
    return (
        <div className="App">
            <div id="app-bg"></div>

            {/* <div className="cs">
                <h1 data-text="Coming~Soon">Coming~Soon</h1>
            </div> */}

            <Hero />
            <Portfolio />
            <img
                src={require("./components/asset/roadmap.png")}
                alt="roadmap"
                className="roadmap"
                id="roadmap"
            />
            <About />

            <Team />
            <Contact />
        </div>
    );
}

export default App;
