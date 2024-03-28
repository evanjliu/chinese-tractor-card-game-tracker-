// Import icons for player scores


// Player Scores
const PlayerScores = () => {
    const playerCards = JSON.parse(localStorage.getItem('playerCards')) || [''];
    const playerNames = JSON.parse(localStorage.getItem('playerNames')) || [''];

    return (
        <>
            <p>Current Player and Scores</p>
            <table className="player-names">
                <tbody>
                    <tr>
                    {playerNames.map((item,index) =>  (
                        <td key={index}>{item}</td>
                    ))}
                    </tr>
                    <tr>
                        {playerCards.map((item, index) => (
                            <td key={index}>{item}</td> 
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    )
};

export default PlayerScores