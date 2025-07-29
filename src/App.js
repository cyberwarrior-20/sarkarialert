// App.jsx
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import LatestPost from './Components/LatestPost';
import Privatejob from './Components/Privatejob';
import AboutUs from './Components/AboutUs';
import FloatingButtons from './Components/FloatingButtons'; // Choose this one
// import CompactFloatingButtons from './Components/CompactFloatingButtons'; // Or this one

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest-post" element={<LatestPost />} />
          <Route path="/private-job" element={<Privatejob />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      {/* <CompactFloatingButtons /> */}
    </div>
  );
}

export default App;
