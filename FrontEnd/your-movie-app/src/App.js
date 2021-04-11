import {useState, useEffect} from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import MovieDescription from './components/MovieDescription'

function App() {
  const [movies, setMovies] = useState([])
  const [movieDes, setMovieDes] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await fetchMovies()
      setMovies(moviesFromServer)
    }

    const getMovieDes = async () => {
      const movieDesFromServer = await fetchMovieDes()
      setMovieDes(movieDesFromServer)
    }

    
    getMovieDes()
    getMovies()

  }, [])

  //Fetch Movies
  const fetchMovies = async () => {
    const res = await fetch('http://localhost:5000/movies')
    const data = await res.json()

    return data
  }

  //Fetch MovieDescription(When Clicked)
  const fetchMovieDes = async () => {
    const res = await fetch('http://localhost:5000/movie_description')
    const data = await res.json()

    console.log(data)
    return data
  }

  return (
    <div className="container">
      <Header />
      <SearchBar />
      <Movies movies={movies}/>
      <MovieDescription movieDes={movieDes}/>
    </div>
  );
}

export default App;
