import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SelectCard from "../components/select-card";
import PlayerScores from "../components/player-scores";

const PlayFriends = () => {
    // Redirects when called
    const redirect = useNavigate();

    // Get variables from local storage
    const numPlayersData = localStorage.getItem('numPlayers') || 2;
    const numPlayers = numPlayersData ? parseInt(localStorage.getItem('numPlayers')) : 2;
    
    const playerNamesData = localStorage.getItem('playerNames') || [''];
    const playerNames = playerNamesData ? JSON.parse(localStorage.getItem('playerNames')) : [''];

    const selectedGame = JSON.parse(localStorage.getItem('selectedGame')) || '';
    const playerCards = JSON.parse(localStorage.getItem('playerCards')) || [''];
    const initialGameState = JSON.parse(localStorage.getItem('gameState')) || 'start';
    const numberDecks = parseInt(localStorage.getItem('numberDecks')) || 1;
    const initialCardSuit = JSON.parse(localStorage.getItem('cardSuit')) || '';

    // Current leader of the round.
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [selectedPlayerCard, setSelectedPlayerCard] = useState(null);
    const [gameState, setGameState] = useState(initialGameState);
    const [cardSuit, setCardValue] = useState(initialCardSuit);

    // Buttons
    const handlePlayerSelect = (index, name) => {
        setSelectedPlayer(name);
        setSelectedPlayerCard(playerCards[index]);
        setGameState('select-card')
      };

    const handleGameStart = () => {
        setGameState('select-player');
    };

    const handleCardFormSubmit = (value) => {
        setCardValue(value);
        setGameState('start')
      };

    // Callback function to handle the selected card value
    const handleCardSelect = (card) => {
        // Logic to determine optional content based on the selected card
        alert(card)
  };

    // USE EFFECT
    useEffect(() => {
        localStorage.setItem('gameState', JSON.stringify(gameState));
        localStorage.setItem('playerCards', JSON.stringify(playerCards));
        localStorage.setItem('cardSuit', JSON.stringify(cardSuit));
    }, 
    [gameState, playerCards, cardSuit]);

    // HTML
    return(
    <>
        <div id="play-friends-game">
            {(gameState === 'start') &&
            <div>
                <h1>Game Type: Play Friends</h1>
                <p>Welcome to the Play Friends Version of Tractor. </p>
                <p>If the game is not showing, please visit the <NavLink className="no-decor" to="/play">Play</NavLink> page and fill out player details.</p>
            </div>}

            {/* GAME START AND INTRODUCTION */}
            {(gameState === "start") && (selectedGame ==='friends') && (
                <div className="game-start">
                    <h2>Ready to play?</h2>
                    <div id="ready-button">
                        <button onClick={() => handleGameStart()}>Press here to start!</button>
                    </div>
                </div>
                
            )}
            
            {/* FIRST PLAYER SELECTION */}
            {gameState === 'select-player' &&
                <div id="select-player">
                    <h1>Who is the first team leader?</h1>
                    <p>Please select the starting team leader:</p>
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
            </div>}

            <div id="select-card">
                {/* Import select card */}
                {gameState === 'select-card' &&
                    <SelectCard onCardSelect={handleCardSelect} card={selectedPlayerCard} />
                }
            </div>
            
            {/* Import player scores table */}
            <PlayerScores />
        
        </div>
    </>
        
    )
};


export default PlayFriends;