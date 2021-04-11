const MovieDescription = ({movieDes}) => {
    return (
        <div>
            <h2>{movieDes.title}</h2>
            <h3>{movieDes.rating}</h3>
            <p>{movieDes.description}</p>
        </div>
    )
}

export default MovieDescription
