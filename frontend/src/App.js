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
import PlayFriends from "./pages/play-friends";
import PlayTeams from "./pages/play-teams";


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">

    <header className="App-header">
        <div className="logo-link">
          <Link to="/">Tractor Helper (拖拉机)</Link>
        </div>
        <Navigation />
    </header>

    <main>
      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />

          {/* Games pages */}
          <Route path='/play' element={<PlayGamePage />} />
          <Route path='/play-friends' element={<PlayFriends />} />
          <Route path='/play-teams' element={<PlayTeams />} />

          {/* Scores pages */}
          <Route path='/scores' element={<ScoresPage />} />

          {/* All erroneous pages */}
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
