function Keyletter (props) {
    return (
        <>
            <button onClick={props.handleClick}>{props.text}</button>
        </>
    );
}

export default Keyletter