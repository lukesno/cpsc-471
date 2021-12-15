import './SearchResult.css';

const SearchResult = ({searchResult}) => {
    return(
        <div className="searchResult">
            <h3>{searchResult.address} - ${searchResult.rentPrice}</h3>
            <p>
                Property Type: {searchResult.type}   Beds: {searchResult.noBeds}   Baths: {searchResult.noBaths}   Furnished? {searchResult.furnished}   Square Feet: {searchResult.squareFeet}    
            </p>
        </div>
    )
}

export default SearchResult;