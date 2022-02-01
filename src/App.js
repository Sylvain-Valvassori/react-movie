import axios from 'axios';
import { useEffect } from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import Header from './components/Header';

// pages
import Home from './pages/Home'
import Page2 from './pages/Page2';


// functions

//the component
export default function App() {

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=5a76cbaa272260b4211e019497207c0e')
    .then((data) => console.log(data));
  }, []);





  return (
      <>
        <BrowserRouter>
        <Header />        
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Page2" element={<Page2 />} />
          </Routes>
        </BrowserRouter>
      </>
  );
};
