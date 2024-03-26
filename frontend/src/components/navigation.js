// React icons
import { NavLink, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { HiPlay } from "react-icons/hi2";
import { TbScoreboard } from "react-icons/tb";
import { IoHome } from "react-icons/io5";

// Navigation
function Navigation() {
  const initialSelectedGame = JSON.parse(localStorage.getItem('selectedGame')) || '';
  const [selectedGame, setSelectedGame] = useState(initialSelectedGame);
  console.log("Selected Game:", selectedGame)

  useEffect(() => {
    const initialSelectedGame = JSON.parse(localStorage.getItem('selectedGame')) || '';
    setSelectedGame(initialSelectedGame);
  }, []);

  return (
    <div className="topnav">
      <nav className="global">
          {/* Add links to Home */}
          <Link to="/">Home <IoHome /></Link>
          <NavLink to="/play">Play <HiPlay /></NavLink>
          <NavLink to="/scores">Scores <TbScoreboard /></NavLink>

          {(selectedGame === 'friends') && (
            <>
            <NavLink to="/play-friends">Play Friends </NavLink>
            </>
          )}

          {(selectedGame === 'teams') && (
            <>
            <NavLink to="/play-teams">Play Teams </NavLink>
            </>
          )}
      </nav>
    </div>
  );
}

export default Navigation;