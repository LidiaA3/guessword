import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";

function Game () {

    const wordList = ["albañil", "mensajero", "abrochar", "paro", "plaqueta", "descubrir", "disparar", "carpa", "tigre", "significado",
    "macarrones", "paisaje ", "muelle", "juez", "perseguir", "hermosa", "oro", "realidad", "utilidad", "escandinavo",
    "activista", "biblioteca", "diminuto", "lavabo", "hilos", "pedal", "cerrado", "urgencia", "momia", "agujeros",
    "trepar", "alhajas", "tartamudear", "dichoso", "congreso", "blusa", "separar", "avergonzar", "ganado", "espuma",
    "libro", "servilleta", "camello", "mediano", "maleta", "metal", "nafta", "ruidoso", "microbio", "escuchar",
    "traducir", "aguacero", "carruaje", "verruga", "herradura", "novio", "este", "medialuna", "duelo", "retoque",
    "envolver", "fotocopiadora", "ecologista", "extractor", "modelar", "impresora", "africano", "departamento", "integral", "azotea",
    "navaja", "perderse", "músculo", "amigo", "confucio", "meses", "entrar", "viajar", "aviones", "ingenuo",
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

    function handleLetter(l) {
        console.log('Letter pressed:', l);
        if (wordSolved.includes(l)) {
            console.log('Letter is in');
            wordSolved.map((letter, index) => {
                if(letter === l) {
                    wordToGuess[index] = l;
                }
            })
            setWordToGuess(wordToGuess);
            console.log('Now:', wordToGuess);
        } else {
            console.log('Wrong letter');
            setWrongLetters([...wrongLetters, l]);
            setLives(lives - 1);
        }
    }

    return (
        <>
            <h4>Lives {lives}</h4>
            <h4>WrongLetters {wrongLetters}</h4>
            <h4>Word to guess {wordToGuess}</h4>
            <Keyboard handleLetter={handleLetter}/>
        </>
    );
}

export default Game