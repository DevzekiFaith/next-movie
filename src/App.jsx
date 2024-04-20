import React from 'react';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Component/HomePage/Home";
import AllMovie from "./Component/AllMoviePage/AllMovie";
import AddMovie from "./Component/AddMoviePage/AddMovie";
import LatestMovie from './Component/LatestMovie/LatestMovie';
import NavBar from './Component/NavBar/NavBar';
import Footer from "./Component/Footer/Footer";
import PageNotFound from './Component/PageNotFound/PageNotFound';

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allMovie" element={<AllMovie />} />
          <Route path="/AddMovie" element={<AddMovie />} />
          <Route path="/LatestMovie" element={<LatestMovie />} />
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
