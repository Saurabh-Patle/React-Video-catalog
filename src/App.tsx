import React from 'react';
import './App.css';
import MovieList from './Components/MovieList';


function App() {
  return (
    <div className="container mt-4">  
     <h1 className="text-center mb-4">Video Catalog</h1>
    <MovieList/>
  </div>
  );
}

export default App;
