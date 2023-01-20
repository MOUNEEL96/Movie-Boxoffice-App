import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import './App.css';
import Favorites from './pages/Favourites';
import Home from './pages/Home';
import Movie from './pages/Movie';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<Movie/>}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
