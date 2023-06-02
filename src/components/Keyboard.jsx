import Keyletter from "./Keyletter";
import { keyboardLetters } from "../constants";

function Keyboard (props) {

    return (
        <section className="keyboard">
            {keyboardLetters.map((line, i) => {
                return <div className="keyboard__row" key={i}>
                    {line.map(item => {
                        return <Keyletter isDisabled={item.isDisabled} text={item.letter} key={item.letter} handleClick={() => props.handleLetter(item)} />
                    })}
                </div>
            })}
        </section>
    );
}

export default Keyboard