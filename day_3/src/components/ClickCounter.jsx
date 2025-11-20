function ClickCounter({ clicks, handleClick }){
    return (
        <>
            <button onClick={() => handleClick()}>Cliquer</button>
            <p>{clicks}</p>
        </>
    )
}

export default ClickCounter;