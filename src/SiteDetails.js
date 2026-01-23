import React from "react";
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";
import "./SiteDetails.css"
import {useEffect, useState} from "react";

function SiteDetails(props){
    const {SiteID} = useParams()
    const site = props.sites.find(s=> s.SiteID == SiteID);
    const storedFavorites = localStorage.getItem('favorites');
    const [favorites, setFavorites] = useState(storedFavorites? JSON.parse(storedFavorites) : []);
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
        console.log(localStorage)
        if(site){
            console.log(site.Site);
        }else{
            console.log("undefined");
        }
    }, [favorites]);
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        console.log("hello", storedFavorites);
        if(storedFavorites && storedFavorites !== 'undefined'){
            const favoritesArray = JSON.parse(storedFavorites);
            setFavorites(favoritesArray);
        }
        else{
            setFavorites([]);
        }
    }, []); 
    function toggleFavorite() {
        if(favorites.includes(site.SiteID)){
            setFavorites(favorites.filter(id => id !== site.SiteID));
        }else{
            setFavorites([...favorites, site.SiteID]);
        }
    }     
    if(site) {
        return( <>
            <div class="siteBox">
                <div>
                    <img src={`/imgs/${site.Image}`} alt = "Picture of site"/>
                    <h2>{site.Site}</h2>
                    <p>{site.Description}</p>
                    <p id="cords">Latitude: {site.Latitude}, Longitude: {site.Longitude}</p>
                    <p id="ending">
                        <Link to={`/`}>All Sites</Link> 
                        <span className={favorites.includes(site.SiteID) ? "starFav" : "star"} id="addButton" onClick={toggleFavorite} type="button">&#9733;</span> 
                    </p>
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
                    <p><Link to={`/`}>All Sites</Link> </p> 
                </div>
            </div>
            </>
        );
    }
}

export default SiteDetails;