import SearchResult from '../Components/SearchResult';

const SearchResults = ({searchResults}) => {

    return(
        <div>
            {searchResults.map((searchResult) => (<SearchResult key={searchResult.propertyID} searchResult={searchResult}/>))}
        </div>
    )
}

export default SearchResults;