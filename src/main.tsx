import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Product from "./Product";
import "./styles.css";

const container = document.getElementById("root")!;
createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/product" element={<Product />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


