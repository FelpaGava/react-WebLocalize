import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Nav/Home";
import CadastroLocal from "./components/Nav/CadastroLocal";
import Sobre from "./components/Nav/Sobre";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route
            path="/cadastrarLocal"
            index
            element={<CadastroLocal />}
          ></Route>
          <Route path="/sobre" index element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
