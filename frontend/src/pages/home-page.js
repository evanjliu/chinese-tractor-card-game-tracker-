import {Link} from "react-router-dom";
// Import any icons


// Home Page
function HomePage(){
    return(
        <>
            <h1>Welcome to the Tractor (拖拉机) Helper!</h1>
            <dl>
                <dt>What is Tractor?</dt>
                <dd>
                    Tractor, also known as Tuo La Ji (拖拉机) or Sheng Ji (升级), is a point-based card game originating from China. The card game is played all over the world, and rules vary widely from region to region.
                </dd>
                <dt>What is the objective of the game?</dt>
                <dd></dd>
                <dt>How do I play Tractor?</dt>
                <dd></dd>
                <dt>What is this website for?</dt>
                <dd>This website was created as a helper tool to facilitate playing the game. The planned additions to this website include: a scoreboard to keep track of the current scores, a tracker to keep track of "friends", UI to display the current trump suit, UI to display the current "freinds" cards, and a UI to display total wins.</dd>
            </dl>
        </>
    )
};

export default HomePage;