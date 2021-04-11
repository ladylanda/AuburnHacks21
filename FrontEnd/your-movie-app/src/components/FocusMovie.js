const FocusMovie = ({focusMovie}) => {
    return (
        <div>
            <h1>{focusMovie[0]}</h1>
            <img src={focusMovie[2]}/>
        </div>
    )
}

export default FocusMovie
