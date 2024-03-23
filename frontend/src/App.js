// Import dependencies 
import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter, Link } from 'react-router-dom';

// Import navigation and CSS
import Navigation from './components/navigation';
import './App.css';

// Import pages
import HomePage from './pages/home-page';
import PlayGamePage from './pages/play-game-page';
import ScoresPage from './pages/scores-page';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">

    <header className="App-header">
        <div class="logo-link">
          <Link to="/">Tractor Helper (拖拉机)</Link>
        </div>
        <Navigation />
    </header>

    <main>
      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/play' element={<PlayGamePage />} />
          <Route path='/scores' element={<ScoresPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </section>
    </main>

    <footer>
        <p>Created by Evan Liu</p>
    </footer>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
