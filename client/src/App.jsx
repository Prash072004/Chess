import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>

      <Background />

      <Navbar />

      <Routes>
        <Route path="/" element={<h1 style={{ color: "white", textAlign: "center", marginTop: "40vh" }}> CHESS AI </h1>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
