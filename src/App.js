import axios from 'axios';
import { useEffect } from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom'


// pages
import Home from './pages/Home'





export default function App() {

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=5a76cbaa272260b4211e019497207c0e')
    .then((data) => console.log(data));
  }, []);





  return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
};
