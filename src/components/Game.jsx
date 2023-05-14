import Keyboard from "./Keyboard";

function Game () {

    function handleLetter(l) {
        console.log('Letter pressed:', l)
    }

    return (
        <>
            <h4>Lives</h4>
            <h4>WrongLetters</h4>
            <h4>Word to guess</h4>
            <Keyboard handleLetter={handleLetter}/>
        </>
    );
}

export default Game