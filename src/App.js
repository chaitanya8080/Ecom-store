
import Navbar from './Components/Navbar';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Search from "./Pages/Search";

function App() {
  return (
    <div >
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={ <Products/> }/>
        <Route path="/search" element={ <Search/> }/>
      </Routes>
    </div>
  );
}

export default App;
