// React icons
import React from 'react';
import { Link } from 'react-router-dom';
import { HiPlay } from "react-icons/hi2";
import { TbScoreboard } from "react-icons/tb";
import { IoHome } from "react-icons/io5";

// Navigation
function Navigation() {
  return (
    <div class="topnav">
      <nav class="global">
          {/* Add links to Home */}
          <Link to="/">Home <IoHome /></Link>
          <Link to="/play">Play <HiPlay /></Link>
          <Link to="/scores">Scores <TbScoreboard /></Link>
      </nav>
    </div>
  );
}

export default Navigation;