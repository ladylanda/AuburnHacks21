import {useState, useEffect} from 'react'
import Header from './components/Header'
import Movies from './components/Movies'
import axios from 'axios'
import Score from './components/Score'
import FocusMovie from './components/FocusMovie'

function App() {
  const [movies, setMovies] = useState("")
  const [focusMovie, setFocusMovie] = useState([])
  const [movieScore, setMovieScore] = useState([])

 var queryTable = []

  const onClick = (e) => {
    var inputQuery = document.getElementById("searchBar").value
    console.log("https://gaz3000-auburnhacks21-app.herokuapp.com/get_search/" + inputQuery)

    axios.get("https://gaz3000-auburnhacks21-app.herokuapp.com/get_search/" + inputQuery)
    .then((res) =>
    {
      //setMovies(res.query)
      //console.log(res.data.query)
      setMovies(res.data.query)
    }
    )
}

const titleClick = (e) => {
  setFocusMovie(e.target)
  axios.get("https://gaz3000-auburnhacks21-app.herokuapp.com/get_sentiment/" + focusMovie[1])
    .then((res) =>
    {
      setMovieScore(res.score)
    }
    )
}

console.log(queryTable)
  return (
    <div className="container">
      <Header onClick={onClick}/>
      <Movies movies={movies} titleClick = {titleClick}/>
      <Score movieScore={movieScore}/>
      <FocusMovie focusMovie={focusMovie}/>
    </div>
  );
}

export default App;
