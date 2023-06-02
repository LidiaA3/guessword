function Keyletter (props) {
    return (
        <>
            <button onClick={props.handleClick} disabled={props.isDisabled}>{props.text}</button>
        </>
    );
}

export default Keyletter