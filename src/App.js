
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import LatestPost from './Components/LatestPost';
import Privatejob from './Components/Privatejob';
import AboutUs from './Components/AboutUs';


function App() {
  return (
   <div>
  <Header />
   <Routes>
        <Route path="/" element={<div><Home/></div>} />
        <Route path="/latest-post" element={<div><LatestPost/></div>} />
        <Route path="/private-job" element={<div><Privatejob/></div>} />
        <Route path="/about" element={<div><AboutUs/></div>} />
      </Routes>

  <Footer />
   </div>
  );
}

export default App;
