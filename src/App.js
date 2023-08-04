import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoPage from "./pages/no-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
