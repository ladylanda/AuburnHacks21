const Movie = ({movie, titleClick}) => {
    return (
        <div className='movie'>
            <h3 className='movieTitle' onClick={titleClick}>{movie[0]}</h3>
            <img src={movie[2]}/>
        </div>
    )
}

export default Movie
