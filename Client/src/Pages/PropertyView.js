import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; 

const PropertyView = () => {

    const location = useLocation();
    const [reviews, setReviews] = useState([{}])

    const [currName, setCurrName] = useState('')
    const [currReview, setCurrReview] = useState('')

    useEffect(() => {
        getReviews()
    }, [])
    
    const getReviews = () => {
        console.log("Reviews retrieved");
        fetch(`http://localhost:8081/review/${location.state.property_id}`, {method: "GET"})
        .then(response => {
            return response.json()
        })
        .then(res => {
            console.log(res)
            setReviews(res)
        })
    }
    
    const postReview = () => {
        fetch(`http://localhost:8081/review/${location.state.property_id}/` + 
        `${currName}/${currReview}/${location.state.property_id}`, {
            method: "POST",
        })
        .then(response => {
            console.log("hi")
            return response.json()
        })

        getReviews()
    }

    // "Thu Dec 16 2021 02:55:00 GMT-0700 (Mountain Standard Time)"
    return (
        <div>

            {location.state.address}
            <h3>Reviews:</h3>
            {reviews.map((r) => {
                return(
                    <div style={{marginTop: "1.5%"}}>
                        <div>
                            {r.name} {r.time}
                        </div>
                        
                        <p style={{marginLeft: "37%",width: "400px", wordWrap: "break-word"}}>
                            {r.text}
                        </p>
                        
    
                    </div>
                )
            })}

            <h3 style={{marginTop: "1%", marginBottom: "0.5%"}}>Make your own review!</h3>
            <div>
                <span>Name:</span>
                <input type="text" style={{marginLeft: "0.5%"}} onChange={(e) => setCurrName(e.target.value)}></input>
            </div>
            <div style={{marginTop: "0.5%", marginBottom: "0.5%", display: "flex", justifyContent: "center"}}>
                Review:
                <textarea style={{marginLeft: "0.5%"}} name="paragraph" rows="4" cols="40" onChange={(e) => setCurrReview(e.target.value)}></textarea>
            </div>
            
            <button onClick={postReview} style={{marginBottom: "2%"}}>Post</button>
        </div>
    );
};

export default PropertyView;