import './SearchResult.css';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({searchResult}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/search/property', {state: searchResult})
    }

    return (
        <div className="searchResult" onClick={handleClick}>
            <div className="resultContainer" >
                <h3 className="resultTitle">{searchResult.address} - ${searchResult.rent_price}</h3>
                <p className="resultDetails">
                    Distance From University: {`${searchResult.distance}km`}        Property Type: {searchResult.type}      Beds: {searchResult.no_beds}        Baths: {searchResult.no_baths}      Furnished?: {"True" ? searchResult.furnished == 1 : "False"}        Square Feet: {searchResult.sq_feet}    
                </p>
            </div>
        </div>
    )
}

export default SearchResult;