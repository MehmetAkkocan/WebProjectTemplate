import "./App.css";
import React from "react";
import {
  Link1,
  Navbar,
  Team,
  Gallery,
  Link2,
  Footer,
  Home,
  Link3
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <div className="gradient__bg">
        <div className="path1"></div>
        <Link1 />
        <div className="path2"></div>
        <Link2 />
        <div className="path3"></div>
        <Link3 />
        <div className="path4"></div>
        <Gallery />
        <div className="path1"></div>
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default App;
