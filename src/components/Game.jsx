import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import FillHeart from "./icons/FillHeart";
import EmptyHeart from "./icons/EmptyHeart";
import Popup from "./Popup";

function Game () {

    const wordList = ["tomate", "mensajero", "abrochar", "paro", "plaqueta", "descubrir", "disparar", "carpa", "tigre", "significado",
    "macarrones", "paisaje ", "muelle", "juez", "perseguir", "hermosa", "oro", "realidad", "utilidad", "escandinavo",
    "activista", "biblioteca", "diminuto", "lavabo", "hilos", "pedal", "cerrado", "urgencia", "momia", "agujeros",
    "trepar", "alhajas", "tartamudear", "dichoso", "congreso", "blusa", "separar", "avergonzar", "ganado", "espuma",
    "libro", "servilleta", "camello", "mediano", "maleta", "metal", "nafta", "ruidoso", "microbio", "escuchar",
    "traducir", "aguacero", "carruaje", "verruga", "herradura", "novio", "este", "medialuna", "duelo", "retoque",
    "envolver", "fotocopiadora", "ecologista", "extractor", "modelar", "impresora", "africano", "departamento", "integral", "azotea",
    "navaja", "perderse", "miedo", "amigo", "confucio", "meses", "entrar", "viajar", "aviones", "ingenuo",
    "fideos", "amortiguar", "acuario", "eclipse", "estirar", "zapatillas", "juguetes", "lava", "metal", "colina",
    "curva", "hechizar", "holanda", "grapadora", "placas", "muebles", "manija", "consonantes", "arpa", "conquistar"];

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
    console.log(wordSolved);
    console.log(wordToGuess);

    const [wrongLetters, setWrongLetters] = useState([]);
    const [lives, setLives] = useState(6);

    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');

    function handleLetter(l) {
        if (lives === 0 || !wordToGuess.includes('_')) {
            setGameOver(true);
            if(lives === 0) {
                setWinner(false);
            } else {
                setWinner(true);
            }
            return;
        }
        console.log('Letter pressed:', l);
        if (wordSolved.includes(l)) {
            console.log('Letter is in');
            wordSolved.map((letter, index) => {
                if(letter === l) {
                    wordToGuess[index] = l;
                }
            })
            setWordToGuess([...wordToGuess]);
            console.log('Now:', wordToGuess);
        } else {
            console.log('Wrong letter');
            setWrongLetters([...wrongLetters, l]);
            setLives(lives - 1);
        }
    }

    return (
        <main className="game">
            <section className="status">
                <div className="lives">
                    {new Array(6).fill('').map((item, index)=> lives > index ? <FillHeart /> : <EmptyHeart />)}
                </div>
                <div className="wrongLetters">
                    <small className="wrongLetters__tittle">WrongLetters</small> 
                    <p className="wrongLetters__section">{wrongLetters}</p>
                </div>
            </section>
            <section className="word">
                {wordToGuess.map((item) => <p className="word__letter">{item}</p>)}
            </section>
            {gameOver && <Popup winner={winner} word={word} />}
            <Keyboard handleLetter={handleLetter} />
        </main>
    );
}

export default Game