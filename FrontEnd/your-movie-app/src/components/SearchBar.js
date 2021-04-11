import axios from "axios";
import {useEffect, useState} from 'react'
import FocusMovie from './FocusMovie'

const SearchBar = () => {
    

const [search, setSearch] = useState("")

const [query, setQuery] = useState([])

useEffect( () => {
    fetchDataFromAPI();
},[]);

const fetchDataFromAPI = () => {
    axios.get("https://gaz3000-auburnhacks21-app.herokuapp.com/get_search/" + search)
    .then((res) => {
        setQuery(res.data.query)
    })
}




    return (
        <>
            
            <input id='searchBar' type='text' placeholder='Search Here' onChange={(e) => setSearch(e.target.value)}/>
            <button type="button" onClick={() => fetchDataFromAPI()}>Search</button>
           
            <p>Related Movies:</p>
      {query.map((item) => (
          <div >
        <FocusMovie key={item.url} movieTitle={item.title} src={item.image_url}/>
        </div>
      ))}
        </>
    )
}

export default SearchBar
