import React from "react";
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";


function SiteDetails(props){
    const {SiteID} = useParams()
    const site = props.sites.find(s=> s.SiteID == SiteID);
    if(site) {
        return( <>
            <img src={`imgs/${site.Image}`} alt = "Picture"/>
            <h2>{site.Site}</h2>
            <p>{site.Description}</p>
            <p>Latitude: {site.Latitude} Longitude: {site.Longitude}</p>
        </>);
    }
    else{
        return(
            <>
            <p>Site with ID {SiteID} not found.</p>
            <p><Link to={`/`}>All Sites</Link></p>
            </>
        );
    }
}

export default SiteDetails;