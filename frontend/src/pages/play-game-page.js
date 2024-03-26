// Import icons
import { HiPlay } from "react-icons/hi2";
import { RxReset } from "react-icons/rx";
import { TbScoreboard } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';

// Play game page
const PlayGamePage = () => {
    // Redirects when called
    const redirect = useNavigate();

    // Load player names and number of players from localStorage
    const initialNumPlayers = parseInt(localStorage.getItem('numPlayers')) || 2;
    const initialPlayerNames = JSON.parse(localStorage.getItem('playerNames')) || [''];
    const initialSelectedGame = JSON.parse(localStorage.getItem('selectedGame')) || '';

    // Declares real time variables for the number of players, player names, and game type.
    const [numPlayers, setNumPlayers] = useState(initialNumPlayers);
    const [playerNames, setPlayerNames] = useState(initialPlayerNames);
    const [showGameSelection, setShowGameSelection] = useState(false);
    const [selectedGame, setSelectedGame] = useState(initialSelectedGame);

    // Sets number of players, player names, and selected game to local storage.
    useEffect(() => {
        // Save player names and number of players to localStorage
        localStorage.setItem('numPlayers', numPlayers);
        localStorage.setItem('playerNames', JSON.stringify(playerNames));
        localStorage.setItem('selectedGame', JSON.stringify(selectedGame));
    }, 
    [numPlayers, playerNames, selectedGame]);

    // Updates the number of players and adds new players based on change.
    const handleNumPlayersChange = (e) => {
        const num = parseInt(e.target.value);
        setNumPlayers(num);
        setPlayerNames(new Array(num).fill('').map((_, index) => playerNames[index] || ''));
    };

    // Adds new player when typed into the input form
    const handlePlayerNameChange = (e, index) => {
        const newPlayerNames = [...playerNames];
        newPlayerNames[index] = e.target.value;
        setPlayerNames(newPlayerNames);
    };

    // Handles submit button by calling the game selection question
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowGameSelection(true);
      };

    // Handles game selection
    const handleGameSelection = (game) => {
        setSelectedGame(game);
        localStorage.setItem('selectedGame', JSON.stringify(game));

        // Prints the selected game to console
        console.log('Selected Game:', game);

        // Redirect to the game page or perform other actions here
        if (selectedGame && selectedGame === 'friends'){

            redirect('/play-friends')
        } else {
            redirect('/play-teams')
        };
    };

    // When reset button is pressed, the local storage is cleared.
    const handleResetLocalStorage = () => {
        localStorage.clear();
        setNumPlayers(2); // Reset numPlayers state
        setPlayerNames(['']); // Reset playerNames state
        setSelectedGame(''); // Reset selected game state
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="numPlayers">Number of Players: </label>
                <input
                type="number"
                id="numPlayers"
                name="numPlayers"
                min="1"
                max="20"
                value={numPlayers}
                onChange={handleNumPlayersChange}
                />

                {/* Creates inputs based on how many players have been inputed by the user */}
                {Array.from({ length: numPlayers }).map((_, index) => (
                <div key={index}>
                    <label htmlFor={`player${index}`}>Player {index + 1}: </label>
                    <input
                    type="text"
                    id={`player${index}`}
                    name={`player${index}`}
                    value={playerNames[index]}
                    onChange={(e) => handlePlayerNameChange(e, index)}
                    />
                </div>
                ))}

                <button type="submit">Submit</button>
            </form>
          {showGameSelection && (
            <div className="game-selection-modal">
              <h2>Choose a Game:</h2>
              <button onClick={() => handleGameSelection('friends')}>Friends</button>
              <button onClick={() => handleGameSelection('teams')}>Teams</button>
            </div>
          )}
          <div id="reset">
            <button onClick={handleResetLocalStorage}>Reset</button>
          </div>
        </div>
      );
    };

export default PlayGamePage;