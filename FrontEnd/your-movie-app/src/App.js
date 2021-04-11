import {useState, useEffect} from 'react'
import Header from './components/Header'
import Movies from './components/Movies'
import axios from 'axios'
import Score from './components/Score'
import FocusMovie from './components/FocusMovie'

function App() {
  const [movies, setMovies] = useState([])
  const [focusMovie, setFocusMovie] = useState([])
  const [movieScore, setMovieScore] = useState([])

 

  const onClick = (e) => {
    var inputQuery = document.getElementById("searchBar").value
    console.log("https://gaz3000-auburnhacks21-app.herokuapp.com/get_search/" + inputQuery)

    axios.get("https://gaz3000-auburnhacks21-app.herokuapp.com/get_search/" + inputQuery)
    .then((res) =>
    {
      setMovies(res.query[1])
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
