import axios from "axios";
import {useEffect, useState} from 'react'

const FocusMovie = ({keyValue, movieTitle, src}) => {

    const [score, setScore] = useState("")

    const fetchNLPDataFromAPI = () => {
        axios.get("https://gaz3000-auburnhacks21-app.herokuapp.com/get_sentiment/" + keyValue)
        .then((res) => {
            setScore(res.data.score)
            console.log("click")
            console.log(res.data.score)
        })

    }

    return (
        <div onClick={() => fetchNLPDataFromAPI()}>
            <p key={keyValue}>{movieTitle}</p>
        <img src={src} alt={movieTitle}/>
        <h2>{score}</h2>
        </div>
    )
}

export default FocusMovie
