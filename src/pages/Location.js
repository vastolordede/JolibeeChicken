import React from "react";
import {Link} from 'react-router-dom';
import LocationSelector from "./LocationSelector";

function Locations(){
    return(
        <div className="box">
        <div className="info-box">
            <div className="city-list">
                <LocationSelector />
                <p className="font location-title">Jolibee Stories</p>
                <p className="font ">1900-9999</p><hr className="location-hr"></hr>
            </div>
        </div>
    </div>
    );
}
export default Locations;