import Key from "./key";

function Keyboard (props) {

    const keyboardLetters = [['Q','W','E','R','T','Y','U','I','O','P'], ['A','S','D','F','G','H','J','K','L'], ['Z','X','C','V','B','N','M']];

    return (
        <section className="keyboard">
            {keyboardLetters.map((line, i) => {
                return <div className="keyboard__row" key={i}>
                    {line.map(letter => {
                        return <Key text={letter} key={letter} handleClick={() => props.handleLetter(letter)} />
                    })}
                </div>
            })}
        </section>
    );
}

export default Keyboard