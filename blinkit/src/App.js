import React from 'react';
import { Home } from './pages/home';
import { Checkout } from './pages/checkout';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/:abc" element={<Navigate to="/home" />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={"Error"} />
    </Routes>
  );
}

export default App;

