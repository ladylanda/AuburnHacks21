import axios from "axios";

const SearchBar = ({onClick}) => {
    


    return (
        <div>
            <form action ="/get_search/" method="get">
            <input id='searchBar' type='text' placeholder='Search Here'/>
            <button type="button" onClick={onClick}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
