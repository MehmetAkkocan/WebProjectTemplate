import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {GalleryP} from "./pages"
import "react-vertical-timeline-component/style.min.css";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/gallery" element={<GalleryP />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
