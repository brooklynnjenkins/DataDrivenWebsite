import React from "react";
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";
import "./SiteDetails.css"
import {useEffect, useState, localStorage} from "react";

function SiteDetails(props){
    const {SiteID} = useParams()
    const site = props.sites.find(s=> s.SiteID == SiteID);
    let favorites = [];
    const currentFavorites = getFavorites();
    console.log(currentFavorites);

    function saveFaves(){
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    function getFavorites(){
        const favoritesString = localStorage.getItem('favorites');
        if(favoritesString === null){
            return "item not found";
        }
        else{
            return favoritesString ? JSON.parse(favoritesString) : [];
        } 
    }
    function addFavorite(itemID){
        const favorites = getFavorites();
        if(!favorites.includes(itemID)){
            favorites.push(itemID);
            saveFaves(favorites);
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
                        <Link onClick={saveFaves} to={`/`}>All Sites</Link> 
                        <span type="button" onClick={addFavorite(site.Site)}>&#9733;</span>
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