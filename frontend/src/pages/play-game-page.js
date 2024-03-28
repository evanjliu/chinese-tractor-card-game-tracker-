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
    const initialNumPlayersData = parseInt(localStorage.getItem('numPlayers')) || 2;
    const initialNumPlayers = initialNumPlayersData ? parseInt(localStorage.getItem('numPlayers')) : 2;

    const initialPlayerNames = JSON.parse(localStorage.getItem('playerNames')) || [''];
    const initialSelectedGame = JSON.parse(localStorage.getItem('selectedGame')) || '';

    const initialPlayerScoresData = JSON.parse(localStorage.getItem('playerScores')) || ['']
    const initialPlayerScores = initialPlayerScoresData ? JSON.parse(localStorage.getItem('playerScores')) : [''];

    const initialPlayerCards = JSON.parse(localStorage.getItem('playerCards')) || [''];
    const initialNumberDecks = parseInt(localStorage.getItem('numberDecks')) || 1;
    const initialGameState = JSON.parse(localStorage.getItem('gameState')) || 'start';

    // Declares real time variables for the number of players, player names, and game type.
    const [numPlayers, setNumPlayers] = useState(initialNumPlayers);
    const [playerNames, setPlayerNames] = useState(initialPlayerNames);
    const [showGameSelection, setShowGameSelection] = useState(false);
    const [selectedGame, setSelectedGame] = useState(initialSelectedGame);
    const [playerScores, setPlayerScores] = useState(initialPlayerScores);
    const [playerCards, setPlayerCards] = useState(initialPlayerCards);
    const [numberDecks, setNumberDecks] = useState(initialNumberDecks);
    const [gameState, setGameState] = useState(initialGameState);

    // Sets number of players, player names, and selected game to local storage.
    useEffect(() => {
        // Save player names and number of players to localStorage
        localStorage.setItem('numPlayers', JSON.stringify(numPlayers));
        localStorage.setItem('playerNames', JSON.stringify(playerNames));
        localStorage.setItem('selectedGame', JSON.stringify(selectedGame));
        localStorage.setItem('playerScores', JSON.stringify(playerScores));
        localStorage.setItem('playerCards', JSON.stringify(playerCards));
        localStorage.setItem('numberDecks', JSON.stringify(numberDecks));
        localStorage.setItem('gameState', JSON.stringify(gameState));
    }, 
    [numPlayers, playerNames, selectedGame, playerScores, playerCards, numberDecks, gameState]);

    // Updates the number of players and adds new players based on change.
    const handleNumPlayersChange = (e) => {
        const num = parseInt(e.target.value);
        setNumPlayers(num);
        setPlayerNames(new Array(num).fill('').map((_, index) => playerNames[index] || ''));
        setPlayerScores(new Array(num).fill('').map((_, index) => '0'));
        setPlayerCards(new Array(num).fill('').map((_, index) => '2'));
    };

    // Updates number of decks when changed
    const handleNumberDecksChange = (e) => {
        const decks = parseInt(e.target.value);
        setNumberDecks(decks);
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
        if (window.confirm("Are you sure everything is correct? Pressing 'Yes' will reset state of the game.")) {
            setShowGameSelection(true);
            setGameState('start');
        }
      };

    // Handles game selection
    const handleGameSelection = (game) => {
        setSelectedGame(game);
        localStorage.setItem('selectedGame', JSON.stringify(game));

        // Prints the selected game to console
        console.log('Selected Game:', game);

        // Redirect to the game page or perform other actions here
        if (game === 'friends'){
            redirect('/play-friends')
        } else {
            redirect('/play-teams')
        };
    };

    

    // When reset button is pressed, the local storage is cleared.
    const handleResetLocalStorage = () => {
        if (window.confirm("Are you sure you want to reset the current game?")) {
            localStorage.clear();
            setNumPlayers(2); // Reset numPlayers state
            setPlayerNames(['']); // Reset playerNames state
            setSelectedGame(''); // Reset selected game state
            setShowGameSelection(false); // Closes game selection fields
        }
      };

    return (
        <div>
            <h1>Player Information:</h1>
            <p className="warning">WARNING: Modifying the number of players may reset the current scores of players.</p>
            <div id="player-deck-table">
                <table id="decks-players-table">
                    <caption>Recommended number of decks for amount of players: </caption>
                    <thead>
                        <tr>
                            <th>Number of Players</th>
                            <th>Number of Decks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2 - 5</td>
                            <td>1 - 2 Decks</td>
                        </tr>
                        <tr>
                            <td>6 - 8</td>
                            <td>2 - 4 Decks</td>
                        </tr>
                        <tr>
                            <td>9+</td>
                            <td>3+ Decks</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Form for player Names */}
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

                <label htmlFor="numberDecks">Number of decks of cards that will be used to play: </label>
                <input 
                    type="number"
                    id="numberDecks"
                    name="numberDecks"
                    min="1"
                    max="5"
                    value={numberDecks}
                    onChange={handleNumberDecksChange}
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
                    required
                    pattern="^\S(.*\S)?$"
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