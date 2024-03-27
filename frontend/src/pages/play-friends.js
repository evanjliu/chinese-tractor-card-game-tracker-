import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import selectCard from "../components/select-card";

const PlayFriends = () => {
    // Redirects when called
    const redirect = useNavigate();

    // Get variables from local storage
    const numPlayers = parseInt(localStorage.getItem('numPlayers')) || 2;
    const playerNames = JSON.parse(localStorage.getItem('playerNames')) || [''];
    const selectedGame = JSON.parse(localStorage.getItem('selectedGame')) || '';
    const playerScores = JSON.parse(localStorage.getItem('playerScores')) || [''];
    const playerCards = JSON.parse(localStorage.getItem('playerCards')) || [''];

    // Current leader of the round.
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [selectedPlayerCard, setSelectedPlayerCard] = useState(null);

    const handlePlayerSelect = (index, name) => {
        setSelectedPlayer(name);
        setSelectedPlayerCard(playerCards[index]);
      };

    // HTML
    return(
        <div id="play-friends-game">
            <h1>Game Type: Play Friends</h1>
            <p >If the game is not showing, please visit the <NavLink className="no-decor" to="/play">Play</NavLink> page and fill out player details.</p>

            {(selectedGame ==='friends') && (
            <>
                <div className="game-start">
                    <h2>Ready to play?</h2>
                    
                    <p>Current Player and Scores</p>
                    <table className="player-names">
                        <tbody>
                            <tr>
                            {playerNames.map((item,index) =>  (
                                <td key={index}>{item}</td>
                            ))}
                            </tr>
                            <tr>
                                {playerScores.map((item, index) => (
                                   <td key={index}>{item}</td> 
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            <h2>Who is the Team Leader?</h2>
            <div>
                <p>Select a player:</p>
                <div className="button-container">
                    {playerNames.map((item, index) => (
                    <button
                        key={index}
                        className={selectedPlayer === item ? 'selected' : ''}
                        onClick={() => handlePlayerSelect(index, item)}
                    >
                        {item}
                    </button>
                    ))}
                </div>
                {selectedPlayer && <p>Selected player: {selectedPlayer}, Current Card: {selectedPlayerCard}</p>}
                
            </div>
            </>
            )}            
        
        </div>
        
    )
};


export default PlayFriends;