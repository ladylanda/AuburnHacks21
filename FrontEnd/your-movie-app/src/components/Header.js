import SearchBar from './SearchBar'

const Header = ({onClick}) => {
    return (
        <header>
            <h1 className="Title">uMovie</h1>
            <SearchBar onClick={onClick}/>
        </header>
    )
}

export default Header
