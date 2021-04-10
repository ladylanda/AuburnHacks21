import logo from './logo.svg';
import banner from './banner.jpg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import movie1 from './exampleMovie1.jpg';
import movie2 from './exampleMovie2.jpg';
import movie3 from './exampleMovie3.jpg';


function App() {
  return (
    <div className="App">
     

      <body className="App-body">
      <img src = {banner} width = "100%" height = "200" ></img>
        <center><h1 className = "Web-Title">Movie Finder</h1></center>

        <center> <p >Welcome to Movie Finder! Type in a movie title to begin.</p></center>

        <center>
        <form action=""> 
          <label for="movTitle">Movie Title:   </label>
          <input type="text" id="movTitle" name="moveTitle" placeholder = "Search"></input>
          <input type="submit" value="Submit"></input>

        </form>
        </center>
      <center>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {movie1}
      alt="First Movie"
    />
    <Carousel.Caption>
      <h3>Movie Title 1</h3>
      <p>Basic Movie Description</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={movie2}
      alt="Second Movie"
    />

    <Carousel.Caption>
      <h3>Movie Title 2</h3>
      <p>Basic Movie Description</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={movie3}
      alt="Third Movie"
    />

    <Carousel.Caption>
      <h3>Movie Title 3</h3>
      <p>Basic Movie Description</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</center>

      </body>
      
      
    </div>
    
    
  );
}

export default App;
