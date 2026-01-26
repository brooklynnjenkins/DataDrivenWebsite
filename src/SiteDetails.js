import React from "react";
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function SiteDetails(props){
    const {SiteID} = useParams()
    const site = props.sites.find(s=> s.SiteID == SiteID);
    const storedFavorites = localStorage.getItem('favorites');
    const [favorites, setFavorites] = useState(storedFavorites? JSON.parse(storedFavorites) : []);
    const [isClicked, setIsClicked] = useState(false);
    const [isClickedAgain, setIsClickedAgain] = useState(false);

    useEffect(() => {
    if (isClicked) {
        const timer = setTimeout(() => {setIsClicked(false);}, 300);
        return () => clearTimeout(timer);
        }
    }, [isClicked]);
    useEffect(() => {
    if (isClickedAgain) {
        const timer = setTimeout(() => {setIsClickedAgain(false);}, 300);
        return () => clearTimeout(timer);
        }
    }, [isClickedAgain]);

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
            setIsClickedAgain(true);
        }else{
            setFavorites([...favorites, site.SiteID]);
            setIsClicked(true);
        }
    }     
    if(site) {
        return( <>
            <div id="details" class="siteBox">
                <div>
                    <img class="detailsPic" src={`/imgs/${site.Image}`} alt = {`${site.Site} Picture`}/>
                    <h2>{site.Site}</h2>
                    <p>{site.Description}</p>
                    <p id="cords">Latitude: {site.Latitude}, Longitude: {site.Longitude}</p>
                    <p id="ending">
                        <Link to={`/`}>All Sites</Link> 
                        <span className={`${favorites.includes(site.SiteID) ? "starFav" : "star"} ${isClicked ? 'scaleUp' : ''} ${isClickedAgain ? 'scaleDown' : ''}`} id="addButton" onClick={toggleFavorite} type="button">&#9733;</span> 
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