function Popup(props) {
    return (
        <div className="popup">
            <p className="popup__tittle">Game over</p>
            <p>{props.winner ? 'Congratulations!' : `Oh you lost. The word was '${props.word.toLowerCase()}'`}</p>
            <button className='restart' onClick={() => {window.location.reload()}}>Restart game</button>
        </div>
    );
}

export default Popup