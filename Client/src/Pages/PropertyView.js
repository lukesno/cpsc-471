import { useState } from "react";
import { useLocation } from 'react-router-dom'; 



export default function PropertyView() {

    const location = useLocation();
    console.log(location.state)
    return (
        <div>
            {location.state.address}
            
        </div>
    );
}