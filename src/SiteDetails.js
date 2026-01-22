import React from "react";
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";
import "./SiteDetails.css"

function SiteDetails(props){
    const {SiteID} = useParams()
    const site = props.sites.find(s=> s.SiteID == SiteID);
    if(site) {
        return( <>
            <div class="siteBox">
                <div>
                    <img src={`/imgs/${site.Image}`} alt = "Picture of site"/>
                    <h2>{site.Site}</h2>
                    <p>{site.Description}</p>
                    <p id="cords">Latitude: {site.Latitude}, Longitude: {site.Longitude}</p>
                    <p><Link to={`/`}>All Sites</Link></p>
                </div>
            </div>
        </>);
    }
    else{
        return(
            <>
            <div class="siteBox" id="noID">
                <div>
                    <p>Site with ID "{SiteID}" not found.</p>
                    <p><Link to={`/`}>All Sites</Link></p>
                </div>
            </div>
            </>
        );
    }
}

export default SiteDetails;