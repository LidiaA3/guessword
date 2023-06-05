import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import FillHeart from "./icons/FillHeart";
import EmptyHeart from "./icons/EmptyHeart";
import Popup from "./Popup";
import wordList from "../constants";

function Game () {

    const [word, setWord] = useState('');
    const [wordSolved, setWordSolved] = useState([]);
    const [wordToGuess, setWordToGuess] = useState([]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 100);
        setWord(wordList[randomIndex].toUpperCase());
    }, [])
    
    useEffect(() => {
        setWordSolved(word.split(''));
    }, [word])

    useEffect(() => {
        setWordToGuess(wordSolved.map(item => item = '_'))
    }, [wordSolved])

    console.log(word);

    const [wrongLetters, setWrongLetters] = useState([]);
    const [lives, setLives] = useState(6);

    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');

    useEffect(() => {
        if(lives === 0) {
            setGameOver(true);
            setWinner(false);
        }
    }, [lives]);

    useEffect(() => {
        if(wordToGuess.length && !wordToGuess.includes('_')) {
            setGameOver(true);
            setWinner(true);
        }
    }, [wordToGuess]);

    function handleLetter(l) {
        if (lives === 0 || !wordToGuess.includes('_')) {
            return;
        }
        console.log('Letter pressed:', l.letter);
        l.isDisabled = true;
        if (wordSolved.includes(l.letter)) {
            console.log('Letter is in');
            wordSolved.map((letter, index) => {
                if(letter === l.letter) {
                    wordToGuess[index] = l.letter;
                }
            })
            setWordToGuess([...wordToGuess]);
        } else {
            console.log('Wrong letter');
            setWrongLetters([...wrongLetters, l.letter]);
            setLives(lives - 1);
        }
    }

    return (
        <main className="game">
            <section className="status">
                <div className="lives">
                    {new Array(6).fill('').map((item, index)=> lives > index ? <FillHeart key={index}/> : <EmptyHeart key={index}/>)}
                </div>
                <div className="wrongLetters">
                    <small className="wrongLetters__tittle">WrongLetters</small> 
                    <p className="wrongLetters__section">{wrongLetters.join(', ')}</p>
                </div>
            </section>
            <section className="word">
                {wordToGuess.map((item, index) => <p className="word__letter" key={index}>{item}</p>)}
            </section>
            {gameOver && <Popup winner={winner} word={word} />}
            <Keyboard handleLetter={handleLetter} />
        </main>
    );
}

export default Game