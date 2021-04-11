import axios from "axios";
import {useEffect, useState} from 'react'

const FocusMovie = ({keyValue, movieTitle, src}) => {

    const [score, setScore] = useState("")

    const fetchNLPDataFromAPI = () => {
        var temp = keyValue.split("/")
        keyValue = temp[temp.length - 1]
        console.log(keyValue)
        axios.get("https://gaz3000-auburnhacks21-app.herokuapp.com/get_sentiment/" + keyValue)
        .then((res) => {
            if (res.data.score !== -1)
           {
            setScore(res.data.score)
           }
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
