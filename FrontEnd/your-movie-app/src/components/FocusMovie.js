import axios from "axios";
import {useEffect, useState} from 'react'

const FocusMovie = ({key, movieTitle, src}) => {

    const [score, setScore] = useState("")

    const fetchNLPDataFromAPI = () => {
        axios.get("https://gaz3000-auburnhacks21-app.herokuapp.com/get_sentiment/" + key)
        .then((res) => {
            setScore(res.data.score)
        })

    }

    return (
        <div onClick={() => fetchNLPDataFromAPI()}>
            <p key={key}>{movieTitle}</p>
        <img src={src} alt={movieTitle}/>
        <h2>{score}</h2>
        </div>
    )
}

export default FocusMovie
